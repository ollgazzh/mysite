function showSpecial(id) {
    document.getElementById('main-screen').style.display = 'none';

    let texts = document.querySelectorAll('.texts');
    texts.forEach(t => t.style.display = 'none');

    if (id.startsWith('text')) {
        document.getElementById(id).style.display = 'block';
        return;
    }

    let zone = document.getElementById('animation-zone');
    zone.style.display = 'flex';
    zone.innerHTML = '';

    // Буква О (ООП)
    if (id === 'O') {
        let words = ['class', 'polymorphism', 'inheritance', 'encapsulation'];
        words.forEach((word, index) => {
            setTimeout(() => {
                let el = document.createElement('div');
                el.className = 'falling-word';
                el.innerText = word;
                el.style.left = Math.random() * 80 + 10 + '%';
                zone.appendChild(el);
            }, index * 400);
        });
        setTimeout(() => {
            let title = document.createElement('h1');
            title.innerText = 'ООП';
            title.style.fontSize = '100px';
            title.style.zIndex = '100';
            title.style.backgroundColor = '#fce883';
            title.style.padding = '20px';
            title.style.borderRadius = '20px';
            zone.appendChild(title);
        }, 1800);
    }
    // Буква л (Вопросительные знаки)
    else if (id === 'l') {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                let el = document.createElement('div');
                el.className = 'falling-word';
                el.innerText = '?';
                el.style.fontSize = '40px';
                el.style.left = Math.random() * 90 + 5 + '%';
                zone.appendChild(el);
            }, i * 200);
        }
        setTimeout(() => {
            let title = document.createElement('h1');
            title.innerText = 'lne**e';
            title.style.fontSize = '80px';
            title.style.zIndex = '100';
            title.style.backgroundColor = '#fce883';
            title.style.padding = '20px';
            title.style.fontFamily = "'Courier New', monospace";
            zone.appendChild(title);
        }, 1500);
    }
    // Буква ь (Ошибка)
    else if (id === 'soft') {
        let title = document.createElement('h1');
        title.innerText = 'oops, unexpected error :/';
        title.className = 'pop-error';
        zone.appendChild(title);
    }
    // Буква г (Граф-сердечко на Canvas)
    else if (id === 'g') {
        let canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 600;
        canvas.style.backgroundColor = '#fce883';
        canvas.id = 'graph-canvas';
        zone.appendChild(canvas);

        let ctx = canvas.getContext('2d');
        let points = [];

        for (let t = 0; t < Math.PI * 2; t += 0.2) {
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

            let scale = 15;
            let offsetX = 300;
            let offsetY = 300;
            points.push({ x: x * scale + offsetX, y: -y * scale + offsetY });
        }

        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
            let p1 = points[i];
            let p2 = points[(i + 1) % points.length];
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
        }
        ctx.stroke();

        ctx.fillStyle = '#4e3b31';
        for (let p of points) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        let text = document.createElement('div');
        text.innerText = 'Графы';
        text.style.position = 'absolute';
        text.style.fontSize = '40px';
        text.style.fontWeight = 'bold';
        text.style.color = '#4e3b31';
        text.style.zIndex = '100';
        zone.appendChild(text);
    }
    // Буква а (Алгоритмы)
    else if (id === 'a') {
        let words = ['бинарный поиск', 'сортировка', 'queue', 'stack', 'LIFO', 'FIFO'];
        words.forEach((word, index) => {
            setTimeout(() => {
                let el = document.createElement('div');
                el.className = 'falling-word';
                el.innerText = word;
                el.style.left = Math.random() * 70 + 15 + '%';
                el.style.color = '#ff8c00';
                zone.appendChild(el);
            }, index * 400);
        });
        setTimeout(() => {
            let title = document.createElement('h1');
            title.innerText = 'Алгоритмы';
            title.style.fontSize = '100px';
            title.style.zIndex = '100';
            title.style.backgroundColor = '#fce883';
            title.style.padding = '20px';
            zone.appendChild(title);
        }, 2000);
    }
}

function goBack() {
    document.querySelectorAll('.texts').forEach(t => t.style.display = 'none');
    document.getElementById('main-screen').style.display = 'flex';
}

document.getElementById('animation-zone').addEventListener('click', function () {
    this.style.display = 'none';
    document.getElementById('main-screen').style.display = 'flex';
});