const { createApp } = Vue

const app = {
    data() {
        return {
            screen: 'main',
            floors: 0,
            floorsArray: [],
            floorHeight: 200,
            firstFloorPosition: 50,
            currentFloor: 1,
            floorsQueue: [],
            elevator: null,
            doorLeft: null,
            doorRight: null,
            statusMovement: null,
            error: null,
        }
    },
    methods: {
        // Обнуление
        reset() {
            this.screen = 'main'
            this.floors = 0
            this.floorsArray = []
            this.firstFloorPosition = 50
            this.currentFloor = 1
            this.floorsQueue = []
            this.elevator = null
            this.doorLeft = null
            this.doorRight = null
            this.statusMovement = null
        },
        // Старт проекта
        startProject() {
            if (this.floors < 2) {
                this.error = 'Количество этажей должно быть минимум 2'
                console.log(this.error);
            } else {
                this.error = null
                this.createFloors()
            }
        },
        // Создание этажей
        createFloors() {
            this.screen = 'elevator'

            for (let i = 1; i <= this.floors; i++) {
                this.floorsArray.push(i)
            }

            this.floorsArray.reverse()
            this.firstFloorPosition = (this.floors - 1) * 200

            this.elevator = document.querySelector('#elevator')
            this.doorLeft = document.querySelector('.door__left')
            this.doorRight = document.querySelector('.door__right')
        },
        // Спустить лифт на 1 этаж
        elevatorToFirstFloor() {
            let transition = (this.currentFloor - 1) * 2
            this.elevator.style.cssText = `
                transition: all ${transition}s ease-in-out; 
                transform: translateY(0)
            `;
            this.statusMovement = false
            this.currentFloor = 1

            setTimeout(this.openElevatorDoors, transition * 1000 + 500)
        },
        // Открыть двери лифта
        openElevatorDoors() {
            this.status = 'open doors'
            this.doorLeft.classList.add('door__left_open')
            this.doorRight.classList.add('door__right_open')

            console.log(`Текущий этаж: ${this.currentFloor}`);

            // Закрыть двери
            setTimeout(() => {
                this.doorLeft.classList.remove('door__left_open')
                this.doorRight.classList.remove('door__right_open')

                // Запустить лифт на следующий этаж в очереди
                if (this.statusMovement === true) {
                    setTimeout(this.moveElevator, 2500)
                }
            }, 4000)
        },
        // Вызвать лифт на n этаж
        callElevator(floorNumber) {
            console.log(`Вызвать на ${floorNumber} этаж`);
            this.floorsQueue.push(floorNumber)

            // Запустить лифт, если он остановлен
            if (this.statusMovement !== true) {
                this.statusMovement = true
                this.moveElevator()
            }
        },
        // Движение лифта
        moveElevator() {
            if (this.floorsQueue.length !== 0) {
                let nextFloor = this.floorsQueue.shift()
                let transition = Math.abs(nextFloor - this.currentFloor) * 2
                
                this.elevator.style.cssText = `
                    transition: all ${transition}s ease-in-out; 
                    transform: translateY(${(nextFloor - 1) * -200}px)
                `

                this.currentFloor = nextFloor

                setTimeout(this.openElevatorDoors, transition * 1000 + 500)
            } else {
                this.elevatorToFirstFloor()
            }
        }
    },
}

createApp(app).mount('#app')