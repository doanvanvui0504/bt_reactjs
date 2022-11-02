let kids = [
    { id: 1, name: 'Vui', age: 3 },
    { id: 2, name: 'Thanh', age: 2 },
    { id: 3, name: 'Ky', age: 7 },
    { id: 4, name: 'Thach', age: 4 },
    { id: 5, name: 'Quang', age: 8 },
];

let mauGiao = [];

kids.forEach((kid) => {
    // if (kid.age < 6) {
    // mauGiao.push({
    //     id: kid.id,
    //     name: kid.name,
    // });
    // }
    kid.age < 6 ? (mauGiao = [...mauGiao, { id: kid.id, name: kid.name }]) : mauGiao;
});
console.log('Mau Giao: ', mauGiao);

const tieuHoc = kids
    .filter((kid) => kid.age < 11 && kid.age > 5)
    .map((kid) => ({
        id: kid.id,
        name: kid.name,
    }));
console.log('Tieu Hoc:', tieuHoc);
