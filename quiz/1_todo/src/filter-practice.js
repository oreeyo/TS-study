const _arr = [
    {gender: 'male', name: 'james'},
    {gender: 'female', name: 'sarah'},
    {gender: 'female', name: 'miyeon'}
]

const filtered = _arr.filter(function (item) {
    if(item.gender === 'female'){
        return item;
    }
})

console.log(filtered)