/* ── DONUT ANIMATION ── */

function animateDonut() {

    const teal =
    document.querySelector('.donut-teal');

    const orange =
    document.querySelector('.donut-orange');

    teal.style.transition = 'none';

    orange.style.transition = 'none';

    teal.setAttribute(
        'stroke-dasharray',
        '0 251.3'
    );

    orange.setAttribute(
        'stroke-dasharray',
        '251.3 251.3'
    );

    orange.setAttribute(
        'stroke-dashoffset',
        '0'
    );

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            teal.style.transition =
            'stroke-dasharray 1s ease-in-out';

            orange.style.transition =
            'stroke-dashoffset 1s ease-in-out';

            teal.setAttribute(
                'stroke-dasharray',
                '213.6 251.3'
            );

            orange.setAttribute(
                'stroke-dashoffset',
                '-213.6'
            );

        });

    });

}

window.addEventListener('load', () => {

    setTimeout(animateDonut, 300);

});


/* ── TOGGLE BAR CHART ── */

function setToggle(btn, mode) {

    document
    .querySelectorAll('.toggle-bar button')

    .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    const weekly =
    document.getElementById('weeklyChart');

    const xWeekly =
    document.getElementById('xAxisWeekly');

    const monthly =
    document.getElementById('monthlyChart');

    const xMonthly =
    document.getElementById('xAxisMonthly');

    const yAxis =
    document.getElementById('yAxis');

    if (mode === 'weekly') {

        monthly.classList.add('hidden-chart');

        xMonthly.classList.add('hidden-chart');

        weekly.classList.remove('hidden-chart');

        weekly.classList.add('chart-enter');

        xWeekly.classList.remove('hidden-chart');

        setTimeout(() => {

            weekly.classList.remove('chart-enter');

        }, 500);

        yAxis.innerHTML =
        '<span>12</span><span>9</span><span>6</span><span>3</span><span>0</span>';

    }

    else {

        weekly.classList.add('hidden-chart');

        xWeekly.classList.add('hidden-chart');

        monthly.classList.remove('hidden-chart');

        monthly.classList.add('chart-enter');

        xMonthly.classList.remove('hidden-chart');

        setTimeout(() => {

            monthly.classList.remove('chart-enter');

        }, 500);

        yAxis.innerHTML =
        '<span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>';

    }

}