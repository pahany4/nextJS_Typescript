/***
 * tuple (картеж)
 * */

const a7: [number, string, number] = [0, 'a', 1]

/**
 * несмотря на то, что использование метода "push" не будет вызывать ошибки,
 * при добавлении элемента в массив к нему нельзя будет в дальнейшем обращаться
 * */

a7.push(1)
console.log(a7[3]) // error

/** маппинг */
a7.map(s => {
    switch (typeof s) {
        case 'string':
            // ...выполнение кода
            return
        case 'number':
            // ...выполнение кода
            return
    }
})

/** деструкторизация */

const [c4, d1, f] = a7

/** или */

const [c5, ...rest] = a7

