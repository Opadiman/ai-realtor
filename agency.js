// Local estimate only: no form data is stored or sent.
const workloadForm = document.querySelector('#workload-form');
const workloadFields = ['agents', 'inquiries', 'minutes', 'hourly-rate'];
const routineShare = 0.75;
const moneyFormat = new Intl.NumberFormat('ru-RU', {maximumFractionDigits: 0});
const hoursFormat = new Intl.NumberFormat('ru-RU', {maximumFractionDigits: 1});
function updateWorkload() {
  const values = {};
  workloadFields.forEach(key => {
    const field = document.getElementById(key);
    values[key] = Math.max(0, Math.min(Number(field.max), Number(field.value) || 0));
    const output = document.getElementById(`${key}-value`);
    if (output) output.textContent = field.value;
  });
  const total = values.agents * values.inquiries * values.minutes * 22 / 60;
  const releasedHours = total * routineShare;
  document.querySelector('#hours-result').textContent = hoursFormat.format(releasedHours);
  document.querySelector('#money-result').textContent = moneyFormat.format(releasedHours * values['hourly-rate']);
  document.querySelector('#calc-context').textContent = `Из ${hoursFormat.format(total)} ч первичного общения всей команды за 22 рабочих дня.`;
  document.querySelector('#calc-bar-fill').style.width = '75%';
}
workloadForm.addEventListener('input', updateWorkload);
workloadForm.addEventListener('submit', event => event.preventDefault());
workloadForm.addEventListener('reset', () => requestAnimationFrame(updateWorkload));
updateWorkload();
