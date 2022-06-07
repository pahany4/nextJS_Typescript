let c2: 'test' = 'test'

type actionType = 'up' | 'down'

function performAction (action: actionType): -1 | 1 {
    switch (action) {
        case 'down':
            return -1
        case 'up':
            return 1
    }
}

interface ComplexAction {
    s: string
}

function performAction1 (action: actionType | ComplexAction) {
    switch (action) {
        case 'down':
            return -1
        case 'up':
            return 1
    }
}