// Local estimate only: no form data is stored or sent.
const workloadForm = document.querySelector('#workload-form');
const workloadFields = ['agents', 'inquiries', 'minutes', 'share'];
const hoursFormat = new Intl.NumberFormat('ru-RU', {maximumFractionDigits: 1});
function updateWorkload() {
  const values = {};
  workloadFields.forEach(key => {
    const field = document.getElementById(key);
    values[key] = Number(field.value);
    document.getElementById(`${key}-value`).textContent = field.value + (key === 'share' ? '%' : '');
  });
  const total = values.agents * values.inquiries * values.minutes * 22 / 60;
  document.querySelector('#hours-result').textContent = hoursFormat.format(total * values.share / 100);
  document.querySelector('#calc-context').textContent = `Из ${hoursFormat.format(total)} ч первичного общения всей команды за 22 рабочих дня.`;
  document.querySelector('#calc-bar-fill').style.width = `${values.share}%`;
}
workloadForm.addEventListener('input', updateWorkload);
workloadForm.addEventListener('submit', event => event.preventDefault());
workloadForm.addEventListener('reset', () => requestAnimationFrame(updateWorkload));
updateWorkload();
