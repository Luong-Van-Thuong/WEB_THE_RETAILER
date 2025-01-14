document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll('.ao-khoac2-2'); // Lấy tất cả các phần tử .content
    const button2 = document.querySelector('.button-ao-khoac-2'); // Button Next
    const button3 = document.querySelector('.button-ao-khoac-3');

    let visibleStart = 0; // Vị trí phần tử đầu tiên hiển thị
    const visibleCount = 5; // Số phần tử hiển thị cùng lúc

    function updateVisibility() {
        // Duyệt qua tất cả các phần tử và kiểm tra điều kiện hiển thị
        contents.forEach((content, index) => {
            if (index >= visibleStart && index < visibleStart + visibleCount) {
                content.style.display = 'grid'; // Hiển thị các phần tử trong phạm vi
            } else {
                content.style.display = 'none'; // Ẩn các phần tử ngoài phạm vi
            }
        });
    }

    // Thêm sự kiện cho Button "Next"
    button2.addEventListener('click', () => {
        if (visibleStart + visibleCount < contents.length) {
            visibleStart += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart)
            updateVisibility();
        }
        console.log("Nhan >")
    });
    button3.addEventListener('click', () => {
        console.log("nhan +")
        if (visibleStart > 0) {
            visibleStart -= 1; // Giảm vị trí hiển thị đi 2
            console.log(visibleStart)
            updateVisibility();
        }
    });
    // Gọi hàm cập nhật hiển thị lần đầu
    updateVisibility();

    const contents_hoodie = document.querySelectorAll('.ao-hoodie2-2'); // Lấy tất cả các phần tử .content
    const button2_hoodie = document.querySelector('.button-ao-hoodie-2'); // Button Next
    const button3_hoodie = document.querySelector('.button-ao-hoodie-3');

    let visibleStart_hoodie =  1; // Vị trí phần tử đầu tiên hiển thị
    const visibleCount_hoodie =  5; // Số phần tử hiển thị cùng lúc
    
    function updateVisibility_hoodie() {
        // Duyệt qua tất cả các phần tử và kiểm tra điều kiện hiển thị
        contents_hoodie.forEach((content, index) => {
            if (index >= visibleStart_hoodie && index < visibleStart_hoodie + visibleCount_hoodie) {
                content.style.display = 'grid'; // Hiển thị các phần tử trong phạm vi
            } else {
                content.style.display = 'none'; // Ẩn các phần tử ngoài phạm vi
            }
        });
    }

    // Thêm sự kiện cho Button "Next"
    button2_hoodie.addEventListener('click', () => {
        if (visibleStart_hoodie + visibleCount_hoodie < contents_hoodie.length) {
            visibleStart_hoodie += 1; // Tăng vị trí hiển thị thêm 2
            console.log(visibleStart_hoodie)
            updateVisibility_hoodie();
        }
        console.log("Nhan >")
    });


    button3_hoodie.addEventListener('click', () => {
        console.log("nhan -")
        if (visibleStart_hoodie > 0) {
            visibleStart_hoodie -= 1; // Giảm vị trí hiển thị đi 2
            
            updateVisibility_hoodie();
        }
        console.log(visibleStart_hoodie)
    });

    updateVisibility_hoodie()

    /*Tạo reposive cho chân trang*/
    const dau3cham = document.querySelector('.icon-container');
    const chantrang1 = document.querySelector('.all-product-footer-1');
    const chantrang2 = document.querySelector('.all-product-footer-2');
    const chantrang3 = document.querySelector('.all-product-footer-3');
    const chantrangdau3cham = document.querySelector('.allproductreponsive');
    const allproduct = document.querySelector('.all-product')
    let screenWidthpage = window.innerWidth;
    let comanhinh = false;
    const menureponsivebentrai = document.querySelector('.menudautrangreponsive1');
    const hienthimenuleft = document.querySelector('.menureponsiveleft')
    const colsemenureponsiveleft = document.querySelector('.closemenureponsiveleft');
    const homepagereponsive = document.querySelector('.menuleft12');
    const shoppagereponsive = document.querySelector('.menuleft22');
    const pagereponsive = document.querySelector('.menuleft42');
    const choxuong1 = document.querySelector('.choxuong1')
    const choxuong2 = document.querySelector('.choxuong2')
    const choxuong3 = document.querySelector('.choxuong3')
    const headmainpage = document.querySelector('.dau-trang')
    let co1 = false, co2 = false, co3 = false;
    let comenu = false;
    function kiemtradorong() {
        screenWidthpage = window.innerWidth;
        if (screenWidthpage > 700 && comanhinh == true) {
            allproduct.style.backgroundColor = 'white';
            chantrangdau3cham.style.display = 'none';
            chantrang1.style.display = 'flex';
            chantrang1.style.backgroundColor = 'white'
            chantrang2.style.display = 'flex';
            chantrang2.style.backgroundColor = 'black';
            chantrang3.style.display = 'flex';
            chantrang3.style.backgroundColor = 'black';
            console.log("Đã chạy hàm kiem tra do rộng")
        } else if (screenWidthpage < 701 && comanhinh == true) {
            chantrang1.style.display = 'grid';
            chantrang1.style.backgroundColor = 'white'
            chantrang2.style.display = 'grid';
            chantrang2.style.backgroundColor = 'black';
            chantrang3.style.display = 'grid';
            console.log("Đã chạy hàm <701")
        }

        console.log("Đã chạy hàm kiem tra do rộng2 " + screenWidthpage + " " + comanhinh);
    }
    window.addEventListener('resize', function () {
        kiemtradorong();
    });

    dau3cham.addEventListener('click', function () {
        comanhinh = true;
        allproduct.style.backgroundColor = 'white';
        chantrangdau3cham.style.display = 'none';
        chantrang1.style.display = 'grid';
        chantrang1.style.backgroundColor = 'white'
        chantrang2.style.display = 'grid';
        chantrang2.style.backgroundColor = 'black';
        console.log("Đã nhấn dấu 3 chấm");
    });
    kiemtradorong()


    menureponsivebentrai.addEventListener('click', function () {
/*        comenu = true;*/
        if (comenu == true) {
            hienthimenuleft.style.display = 'grid';
            hienthimenuleft.style.backgroundColor = '#EEEEEE';
            
            comenu = false;
        } else {
            hienthimenuleft.style.display = 'none';
            hienthimenuleft.style.backgroundColor = '#EEEEEE';
            comenu = true;
        }

    });

    colsemenureponsiveleft.addEventListener('click', function(){
        hienthimenuleft.style.display = 'none';
    });

    choxuong1.addEventListener('click', function () {
        if (co1 == false) {
            homepagereponsive.style.display = 'grid';
            co1 = true;
            console.log(co1)
        } else {
            homepagereponsive.style.display = 'none';
            co1 = false;
            console.log(co1)
        }
        
    });
    choxuong2.addEventListener('click', function () {
        if (co2 == false) {
            shoppagereponsive.style.display = 'flex';
            co2 = true;
        } else {
            shoppagereponsive.style.display = 'none';
            co2 = false;
        }

    });
    choxuong3.addEventListener('click', function () {
        if (co3 == false) {
            pagereponsive.style.display = 'flex';
            co3 = true;
        } else {
            pagereponsive.style.display = 'none';
            co3 = false;
        }

    });

});


