# day 1

1. note:

- event transitionend => for css transition and display
- use:

  - js:
    const transition = document.querySelector('.transition');
    transition.addEventListener('transitionend', () => {
    console.log('Transition ended');
    });

  - css:
    trasition: all 0.4s

# day 2 clock analog

1. note:

- create analog clock using Date method: getSeconds, getMinutes, getHours
