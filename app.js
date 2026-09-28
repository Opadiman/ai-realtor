const scenarioData = {
  rent: {
    client: 'Марина',
    title: 'Марина · аренда квартиры',
    subtitle: 'Сценарий обращения из чата',
    listingTitle: '2-комнатная квартира, 54 м²',
    listingPrice: '85 000 ₽ / месяц · Москва, ул. Лесная, 8',
    captions: ['Ответы о технике, залоге и условиях аренды','Помощник предлагает только свободное время','Примите решение в карточке риелтора','Пример напоминаний клиенту и риелтору'],
    hints: ['По конкретному объявлению','Отдельное согласие клиента перед записью','Ожидает решения риелтора','Явка клиента подтверждена'],
    exchanges: [
      [['client','Здравствуйте! По объявлению на Лесной. Есть посудомоечная машина? Какой залог?'],['assistant','Здравствуйте! Да, есть посудомоечная и стиральная машины. Залог 85 000 ₽, комиссия 50%. Срок аренды от 6 месяцев.'],['client','А с кошкой можно? Коммунальные входят?'],['assistant','Животные по согласованию. Условия коммунальных платежей не указаны, уточню у риелтора. Кто будет проживать и на какой срок ищете?']],
      [['client','Двое взрослых, без животных, на год. Заезд 1 октября. Я Марина, контакт для связи оставила.'],['assistant','Спасибо, Марина! Есть время 24 сентября: 16:00 или 18:00. Когда вам удобно?'],['client','В 18:00 подходит.'],['assistant','24 сентября в 18:00, квартира на Лесной, 8. Отправить заявку на согласование риелтору?'],['client','Да, подтверждаю.']],
      [['assistant','Заявка отправлена риелтору. Время зарезервировано до его решения. Условия коммунальных платежей уточним отдельно.'],['client','Хорошо, жду подтверждения.']],
      [['assistant','Риелтор подтвердил просмотр: 24 сентября в 18:00, Лесная, 8.'],['assistant','Марина, напоминаем: сегодня просмотр в 18:00. Подтвердите, пожалуйста, что придёте.'],['client','Да, буду вовремя.']]
    ],
    card: '<h3>Марина · запрос на просмотр</h3><dl><div><dt>Объект</dt><dd>Лесная, 8 · 54 м²</dd></div><div><dt>Встреча</dt><dd>24 сентября, 18:00 МСК</dd></div><div><dt>Проживающие</dt><dd>Двое взрослых, без животных</dd></div><div><dt>Аренда</dt><dd>На год, заезд 1 октября</dd></div><div><dt>Вопрос к вам</dt><dd>Что входит в коммунальные платежи?</dd></div></dl>'
  },
  sale: {
    client: 'Марина',
    title: 'Марина · покупка квартиры',
    subtitle: 'Сценарий обращения из чата',
    listingTitle: '2-комнатная квартира, 54 м²',
    listingPrice: '18 500 000 ₽ · Москва, ул. Лесная, 8',
    captions: ['Цена, способ оплаты и срок покупки','Помощник предлагает только свободное время','Примите решение в карточке риелтора','Пример напоминаний клиенту и риелтору'],
    hints: ['По конкретному объявлению','Отдельное согласие клиента перед записью','Ожидает решения риелтора','Явка клиента подтверждена'],
    exchanges: [
      [['client','Здравствуйте! Квартира на Лесной продаётся? Какая цена и подходит ли ипотека?'],['assistant','Здравствуйте! По объявлению: 2 комнаты, 54 м², цена 18 500 000 ₽. Покупка в ипотеку возможна. Какой бюджет и когда планируете покупку?'],['client','До 19 млн, ипотека предварительно одобрена. Купить хотим в течение двух месяцев. Торг возможен?'],['assistant','Условия торга не указаны — передам вопрос риелтору. Бюджет и срок покупки зафиксировала. Хотите выбрать время просмотра?']],
      [['client','Да. Я Марина, контакт для связи оставила.'],['assistant','Есть время 24 сентября: 16:00 или 18:00. Когда вам удобно?'],['client','Давайте в 18:00.'],['assistant','24 сентября в 18:00, Лесная, 8. Отправить заявку на согласование риелтору?'],['client','Да, подтверждаю.']],
      [['assistant','Заявка отправлена риелтору: бюджет до 19 млн ₽, ипотека предварительно одобрена, покупка в течение двух месяцев. Вопрос о торге передала отдельно.'],['client','Спасибо, жду подтверждения просмотра.']],
      [['assistant','Риелтор подтвердил просмотр: 24 сентября в 18:00, Лесная, 8.'],['assistant','Марина, напоминаем: сегодня просмотр в 18:00. Подтвердите, пожалуйста, что придёте.'],['client','Да, буду вовремя.']]
    ],
    card: '<h3>Марина · покупка квартиры</h3><dl><div><dt>Объект</dt><dd>Лесная, 8 · 54 м² · 18,5 млн ₽</dd></div><div><dt>Встреча</dt><dd>24 сентября, 18:00 МСК</dd></div><div><dt>Бюджет</dt><dd>До 19 млн ₽</dd></div><div><dt>Способ оплаты</dt><dd>Ипотека, предварительное одобрение со слов клиента</dd></div><div><dt>Срок покупки</dt><dd>В течение двух месяцев</dd></div><div><dt>Вопрос к вам</dt><dd>Возможен ли торг?</dd></div></dl>'
  },
  call: {
    client: 'Алексей',
    title: 'Алексей · входящий звонок',
    subtitle: 'Сценарий ИИ-колл-центра',
    listingTitle: 'Входящий звонок по объекту',
    listingPrice: 'Объявление, база заявок или исходящий обзвон',
    captions: ['Голосовой агент отвечает на первый звонок','ИИ уточняет запрос и предлагает время','После звонка риелтор получает карточку','Напоминания и повторный контакт'],
    hints: ['Входящий звонок или обзвон','Квалификация голосом','Карточка, транскрипт и аудио','Контроль явки'],
    exchanges: [
      [['client','Здравствуйте, звоню по квартире на Лесной. Она ещё актуальна?'],['assistant','Здравствуйте! Да, объект актуален. Квартира 54 м², 85 000 ₽ в месяц, залог 85 000 ₽. Подскажите, кто будет проживать и когда планируете заезд?'],['client','Мы пара, без животных. Заехать хотим в начале октября.'],['assistant','Отлично, по условиям вы подходите. Уточню ещё срок аренды и удобное время просмотра.']],
      [['client','На год. Лучше посмотреть завтра вечером.'],['assistant','Завтра есть свободные окна в 17:30 и 19:00. Какое время вам удобнее?'],['client','Давайте в 19:00.'],['assistant','Зафиксировала 19:00 и отправлю заявку риелтору на подтверждение. После звонка он получит краткую карточку и запись разговора.']],
      [['assistant','Звонок завершён. Карточка отправлена риелтору: пара без животных, аренда на год, заезд в начале октября, просмотр завтра в 19:00.'],['client','Хорошо, жду подтверждения.']],
      [['assistant','Риелтор подтвердил просмотр завтра в 19:00. За два часа до встречи я напомню вам адрес и попрошу подтвердить явку.'],['assistant','Если планы изменятся, можно ответить на это сообщение или дождаться повторного звонка.'],['client','Спасибо, буду.']]
    ],
    card: '<h3>Алексей · звонок по объекту</h3><dl><div><dt>Канал</dt><dd>Входящий звонок</dd></div><div><dt>Объект</dt><dd>Лесная, 8 · 54 м²</dd></div><div><dt>Встреча</dt><dd>Завтра, 19:00 МСК</dd></div><div><dt>Клиент</dt><dd>Пара, без животных</dd></div><div><dt>Срок и заезд</dt><dd>Аренда на год, заезд в начале октября</dd></div><div><dt>Материалы</dt><dd>Транскрипт и аудиозапись звонка</dd></div></dl>'
  }
};
let step=0,decision='pending',scenario='rent';
const messages=document.querySelector('#messages'),side=document.querySelector('#realtor-demo'),next=document.querySelector('#next-step');
function current(){return scenarioData[scenario];}
function selectScenario(key){scenario=key;step=0;decision='pending';draw();}
document.querySelectorAll('[data-scenario]').forEach(b=>b.addEventListener('click',()=>selectScenario(b.dataset.scenario)));
document.querySelectorAll('[data-open-scenario]').forEach(b=>b.addEventListener('click',()=>{selectScenario(b.dataset.openScenario);document.querySelector('#dialog').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
function bubble(role,text,data){const p=document.createElement('p');p.className=`bubble ${role} new`;const label=document.createElement('span');label.className='bubble-label';label.textContent=role==='client'?data.client:'ИИ Риелтор';p.append(label,document.createTextNode(text));messages.append(p);}
function draw(){const data=current();document.querySelector('#client-title').textContent=data.title;document.querySelector('#scenario-subtitle').textContent=data.subtitle;document.querySelector('#listing-title').textContent=data.listingTitle;document.querySelector('#listing-price').textContent=data.listingPrice;document.querySelector('.chat-avatar').textContent=data.client[0];document.querySelectorAll('[data-scenario]').forEach(b=>{const active=b.dataset.scenario===scenario;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});document.querySelectorAll('[data-step]').forEach(b=>{const active=Number(b.dataset.step)===step;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});messages.replaceChildren();data.exchanges[step].forEach(([role,text])=>bubble(role,text,data));
 document.querySelector('#step-caption').textContent=data.captions[step];
 document.querySelector('#chat-hint').textContent=data.hints[step];
 next.hidden=step===2;next.textContent=['Выбрать время →','Открыть карточку →','','Пройти ещё раз ↻'][step];
 if(step<2){side.innerHTML=`<div class="waiting-card"><span class="waiting-number">${step===0?'01':'02'}</span><h3>${step===0?'Помощник ведёт диалог':'Время выбирает клиент'}</h3><p>${step===0?'Отвечает по объявлению, задаёт вопросы и собирает анкету. Канал может быть любым: чат, входящий звонок или исходящий обзвон.':'Проверяет свободные интервалы. После выбора просит отдельное подтверждение, затем присылает карточку.'}</p><span class="small-label">${step===0?'Сбор данных':'Согласие перед записью'}</span></div>`;}
 else if(step===2){side.innerHTML=`<div class="approval-card"><span class="small-label">На согласовании</span>${data.card}<div class="approval-actions"><button class="button" data-action="approve">Подтвердить встречу</button><button class="outline-button" data-action="cancel">Отменить встречу</button><button class="text-button" data-action="schedule">Посмотреть расписание</button></div><div id="decision-status" role="status"></div></div>`;}
 else{side.innerHTML=`<div class="approval-card"><span class="small-label">Встреча подтверждена</span><h3>${scenario==='call'?'Завтра · 19:00':'24 сентября · 18:00'}</h3><p>${scenario==='call'?'Алексей, Лесная, 8':'Марина, Лесная, 8'}</p><div class="reminder"><strong>Клиенту за 2 часа</strong><p>Напоминание о просмотре и запрос подтверждения явки.</p></div><div class="reminder"><strong>Риелтору за 1 час</strong><p>Карточка встречи, адрес, сведения о клиенте и контекст диалога в Telegram.</p></div><p class="demo-note">Время напоминаний в этом примере. Вы задаёте свои интервалы в кабинете.</p><button class="text-button" data-action="schedule">Посмотреть расписание</button></div>`;}}
document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>{step=Number(b.dataset.step);decision='pending';draw();}));
next.addEventListener('click',()=>{step=(step+1)%4;decision='pending';draw();});
document.querySelector('#replay').addEventListener('click',()=>{step=0;decision='pending';draw();});
side.addEventListener('click',e=>{const action=e.target.closest('[data-action]')?.dataset.action;if(action==='approve'){decision='confirmed';step=3;draw();}if(action==='cancel'){const status=document.querySelector('#decision-status');if(decision!=='cancelling'){decision='cancelling';status.innerHTML='<p>Отменить эту демонстрационную встречу?</p><button class="outline-button" data-action="cancel">Да, отменить</button><button class="text-button" data-action="keep">Сохранить встречу</button>';return;}decision='cancelled';document.querySelector('.approval-actions').hidden=true;status.innerHTML='<p>Встреча отменена. Окно снова свободно.</p><button class="text-button" data-action="reset">Повторить согласование</button>';bubble('assistant','Просмотр отменён. Если захотите выбрать другое время, напишите в этот чат или дождитесь звонка.',current());}if(action==='keep'||action==='reset'){decision='pending';draw();}if(action==='schedule'){setScreen('calendar');document.querySelector('#cabinet').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}});
const screens={calendar:{alt:'Календарь: свободные интервалы, просмотры и заявки на согласовании',caption:'Задайте свободные окна, просмотрите встречи по дням и откройте карточку клиента. Данные на экране демонстрационные.'},clients:{alt:'Кабинет риелтора: статистика диалогов, переписка и заполненная карточка клиента',caption:'Сверху статистика: чаты, звонки, собранные анкеты, просмотры и согласования. Ниже переписка и карточка клиента. Числа относятся к демо-данным.'},style:{alt:'Настройки помощника: правила общения, согласование записей и обязательные вопросы',caption:'Опишите правила своими словами, включите согласование и выберите обязательные вопросы клиенту для чата и звонка. Реальный интерфейс проекта с демо-настройками.'}};
const screen=document.querySelector('#cabinet-screen');
function setScreen(key){const s=screens[key];screen.src=`assets/cabinet-${key}.png`;screen.alt=s.alt;document.querySelector('#screen-caption').textContent=s.caption;document.querySelectorAll('[data-screen]').forEach(b=>{const active=b.dataset.screen===key;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});}
document.querySelectorAll('[data-screen]').forEach(b=>b.addEventListener('click',()=>setScreen(b.dataset.screen)));
const modal=document.querySelector('#screen-modal');document.querySelector('#enlarge-screen').addEventListener('click',()=>{const img=document.querySelector('#modal-image');img.src=screen.src;img.alt=screen.alt;modal.showModal();});modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});
const voices={brief:'Есть время в четверг: 16:00 или 18:00. Какое вам удобно?',warm:'С удовольствием организуем просмотр! В четверг свободны 16:00 и 18:00. Подскажите, когда вам удобнее?',formal:'Для просмотра доступны два интервала в четверг: 16:00 и 18:00. Пожалуйста, выберите подходящее время для согласования с риелтором.'};
document.querySelectorAll('[data-voice]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#voice-answer').textContent=voices[b.dataset.voice];document.querySelectorAll('[data-voice]').forEach(item=>{const active=item===b;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});}));draw();
