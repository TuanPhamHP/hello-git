// B1: lấy danh sách các nav-item
// B2: addEventListener() cho từng item của danh sách nav-item
//     làm 2 công việc sau:
//     CV1: Xóa class 'nav-active' khỏi item đang được active
//     CV2: thêm class 'nav-active' vào item đang được 'click'


const listNavItems = document.querySelectorAll('.nav-link');
const fullSizeImgModal = document.querySelector('#fullSizeImgModal');

if (listNavItems.length) {
    listNavItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            // CV1
            const currentActiveItems = document.querySelectorAll('.nav-active');
            currentActiveItems.forEach(function (activeItem) {
                activeItem.classList.remove('nav-active')
            })

            // CV2
            item.classList.add('nav-active')

            // event là 1 object: ghi lại toàn bộ thông tin về sự kiện vừa xảy ra
        })
    })
}

const sidebar = document.querySelector('#sidebar');
const btnToggleSidebar = document.querySelector('#btnToggleSidebar');
if (btnToggleSidebar && sidebar) {

    btnToggleSidebar.addEventListener('click', ()=>{
        sidebar.classList.toggle('mini-sizebar')
    } )
}


// function name(params){ --blockcode-- }
// arrow fnc: (params)=>{}
// hoisting + scope of 'this' keyword


const listData = [
    {
        id:1,
        name: '[Resin] Goku 1/4 cực nét',
        dim_attribute: '40cm * 56cm * 24cm - (Dài * Cao * Sâu)',
        weight_attribute: '3kg',
        description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://i.ebayimg.com/images/g/aTsAAOSwMMxe-94F/s-l1200.webp'
    },
    {
        id:2,
        name: '[Resin] Goku SSJ 4 1/4 cực nét',
        dim_attribute: '22cm * 56cm * 22cm - (Dài * Cao * Sâu)',
        weight_attribute: '3kg',
        description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://media.karousell.com/media/photos/products/2022/4/8/original_dragonball_goku_super_1649412048_ec3eb94f_progressive.jpg'
    },
    {
        id:3,
        name: '[Resin] Broly',
        dim_attribute: '24cm * 42cm * 14cm - (Dài * Cao * Sâu)',
        weight_attribute: '2,1kg',
        description: 'Mô hình Broly Resin cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://www.clubhousestatues.com/cdn/shop/files/B169DB90-2CDC-4AB7-AE16-57A43041367E.jpg?v=1703168952&width=1946'
    },
    {
        id:4,
        name: '[Resin] Vegeta bán thân',
        dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
        weight_attribute: '1,6kg',
        description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
        image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
    },
    {
        id:5,
        name: 'Con mèo xinh xinh',
        dim_attribute: '-/-',
        weight_attribute: '-/-',
        description: 'Mèo xinh không bán, mang ra khoe cho vui',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2UkMiGq92MZriiS7Qwtaqi_uwMwg3T8vOA&s'
    },
    {
        id:6,
        name: '[Resin] Vegeta bán thân',
        dim_attribute: '',
        weight_attribute: '1,6kg',
        description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
        image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
    },
]

const myTarget = document.querySelector('#myTarget');


function mapProductHTMLFromData(productData){
    // nhận vào 1 object data là 'productData'
    const template = `<div class="col-3">
        <div class="product-card">
          <div class="view-icon-wraper" data-id="${productData.id}">
            <img class="view-icon" src="./assets/images/magnifying-glass-solid.svg" />
          </div>
        <img id="product-img-${productData.id}" class="w-100 product-img" src="${productData.image}" alt="">
        <div class="px-3 py-3">
        <p class="product-title mb-3">${productData.name}</p>
        <p class="product-attribute mb-3">
            <b>Kích thước</b>: ${productData.dim_attribute || 'Chưa có thông tin' }
        </p>
        <p class="product-attribute mb-3">
            <b>Nặng</b>: ${productData.weight_attribute}
        </p>
        <p class="product-desc">${productData.description}</p>
        </div>
    </div>
  </div>
  `
  return template

    // trả ra 1 chuỗi HTML tương ứng

}

function renderListData() {
    // tạo một biến là chuỗi rỗng để lưu trữ.
    let str = '';
    // lặp qua từng phần tử mảng
    listData.forEach((item)=>{
        // với mỗi phần tử ta gọi đến hàm 'mapProductHTMLFromData'
        // hàm 'mapProductHTMLFromData' sẽ return ra một HTML template
        // cộng chuỗi vừa được return vào biến 'str'
        str +=  mapProductHTMLFromData(item);
    })
    // cuối cùng gán toàn bộ chuỗi vừa tính toán vào làm HTML
    myTarget.innerHTML = str;
}
renderListData();

function showModal() {
    if (fullSizeImgModal) {
        fullSizeImgModal.classList.remove('modal-hidden')
    }
}
function hideModal() {
    if (fullSizeImgModal) {
        fullSizeImgModal.classList.add('modal-hidden')
    }
}

// C1: active modal
// C2: query duoc anh va sau do truyen vao element trong modal

const listProductViewIcons = document.querySelectorAll('.product-card .view-icon-wraper');
const previewImg = document.querySelector('#fullSizeImg');
// gán sự kiện
listProductViewIcons.forEach(item => {
    item.addEventListener('click',()=>{
        // const productImg = item.getAttribute('data-img');
        const productId = item.getAttribute('data-id');
        const productImg = document.querySelector(`#product-img-${productId}`);

        previewImg.setAttribute('src', productImg.getAttribute('src'))
        showModal();
    })
})


