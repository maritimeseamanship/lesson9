// - створити блок,
let block = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = 'coral';
block.style.color = 'blue';
block.style.fontSize = '36px';
block.innerText = '36px';

// - додати цей блок в body.
document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.
let clone = block.cloneNode(true);
clone.style.backgroundColor = 'green';
document.body.appendChild(clone);

/* - Є масив:
  ['Main','Products','About us','Contacts']
 Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/
let liArr = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
for (let item of liArr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);

/* - Є масив
 Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
 Завдання робити через цикли.*/
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let item of coursesAndDurationArray1) {
    let block = document.createElement('div');
    block.innerText = `title: ${item.title} | monthDuration: ${item.monthDuration}`;
    document.body.appendChild(block);
}

/*     - Є масив
 За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.*/
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let item of coursesAndDurationArray2) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    h1.innerText = item.title;
    p.innerText = item.monthDuration;

    div.append(h1, p);
    document.body.appendChild(div);
}

/* - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
 Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
   Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджорі Жакли́н «Мардж» Сиімпсон (Бувє) (англ. Marjorie Jacqueline «Marge» Simpson) — постійний персонаж мультиплікаційного серіалу «Сімпсони». Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провінційної американскої домогосподарки 50-х років.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ліза Марі Сімпсон (англ. Lisa Marie Simpson) — героїня мультиплікаційного серіалу «Сімпсоны». Середня дитина в сім*ї, 8 річна дівчинка, розумна і раціонально мисляча',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Мааргарет Евелин «Мегі» Сімпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсеріалу «Сімпсони».',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (let simpson of simpsons) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let i = document.createElement('i');
    let p = document.createElement('p');
    let img = document.createElement('img');

    div.classList.add('member');

    h1.innerText = `${simpson.name} - ${simpson.surname}`;
    i.innerText = `Age: ${simpson.age}`;
    p.innerText = simpson.info;

    img.setAttribute('alt', simpson.name);
    img.setAttribute('src', simpson.photo);

    div.append(h1, i, img, p);
    document.body.appendChild(div);
}


/*    Цикл в циклі
- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

 Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
 Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (let item of coursesArray) {
    let block = document.createElement('div');
    let title = document.createElement('h1');
    let durationsWrapper = document.createElement('div');
    let monthDuration = document.createElement('div');
    let hourDuration = document.createElement('div');
    let modules = document.createElement('ul');

    title.innerText = item.title;
    monthDuration.innerText = item.monthDuration;
    hourDuration.innerText = item.hourDuration;

    for (let module of item.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        modules.appendChild(li);
    }
    block.classList.add('wrapper');
    title.classList.add('text-center');
    durationsWrapper.classList.add('flex');

    durationsWrapper.append(monthDuration, hourDuration);
    block.append(title, durationsWrapper, modules);
    document.body.appendChild(block);
}