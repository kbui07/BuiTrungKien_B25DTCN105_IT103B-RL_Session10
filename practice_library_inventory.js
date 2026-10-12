
const books = [
    { bookCode: "B01", title: "JavaScript", price: 100000, totalCopies: 10, availableCopies: 2, shelfLocation: "A1" },
    { bookCode: "B02", title: "Python", price: 120000, totalCopies: 5, availableCopies: 3, shelfLocation: "A2" },
    { bookCode: "B03", title: "MySQL", price: 150000, totalCopies: 8, availableCopies: 4, shelfLocation: "B1" }
];

// 1. Them sach moi
books.push({
    bookCode: "B04",
    title: "HTML CSS",
    price: 80000,
    totalCopies: 6,
    availableCopies: 6,
    shelfLocation: "B2"
});

// 2. Muon sach B01
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B01") {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;
        }
        break;
    }
}

// 3. Chuyen ke sach B02
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B02") {
        books[i].shelfLocation = "C1";
    }
}

// 4. Thanh ly sach B03
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B03") {
        books.splice(i, 1);
        break;
    }
}

// 5. Kiem ke kho sach
let totalCopies = 0;
let totalValue = 0;
console.log("========== KHO THU VIEN ==========");
for (let i = 0; i < books.length; i++) {
    console.log(
        books[i].bookCode,
        books[i].title,
        "con tren ke:", books[i].availableCopies,
        "vi tri:", books[i].shelfLocation
    );
    if (books[i].availableCopies === 0) {
        console.log("HET SACH TREN KE");
    }
    totalCopies += books[i].totalCopies;
    totalValue += books[i].totalCopies * books[i].price;
}

console.log("Tong so luong sach:", totalCopies);
console.log("Tong gia tri kho:", totalValue, "VND");
