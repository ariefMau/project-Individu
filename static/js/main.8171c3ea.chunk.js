(this["webpackJsonpkasir-app"]=this["webpackJsonpkasir-app"]||[]).push([[0],{64:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(15),i=a.n(s),r=(a(63),a(64),a(19)),o=a(20),j=a(25),l=a(24),h=a(94),b=a(95),d=a(54),u=a(5),O=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(d.a,{md:3,mt:"2",children:[Object(u.jsx)("h5",{children:Object(u.jsx)("b",{children:"Hasil"})}),Object(u.jsx)("hr",{})]})}}]),a}(n.Component),m=a(100),x=a(27),g=a.n(x),p="http://localhost:3004/",f=a(29),v=a(31),k=function(e){var t=e.nama;return"Makanan"===t?Object(u.jsx)(f.a,{icon:v.b,className:"mr-1"}):"Minuman"===t?Object(u.jsx)(f.a,{icon:v.c,className:"mr-2"}):"Cemilan"===t?Object(u.jsx)(f.a,{icon:v.a}):Object(u.jsx)(f.a,{icon:v.b,className:"mr-2"})},y=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={categories:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get(p+"categories").then((function(t){console.log("Response : ",t);var a=t.data;e.setState({categories:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.categories,t=this.props,a=t.changeCategory,n=t.categoriYangDipilih;return Object(u.jsxs)(d.a,{md:2,mt:"2",children:[Object(u.jsx)("h5",{children:Object(u.jsx)("b",{children:"Daftar Kategori"})}),Object(u.jsx)("hr",{}),Object(u.jsx)(m.a,{children:e&&e.map((function(e){return Object(u.jsx)(m.a.Item,{onClick:function(){return a(e.nama)},className:n===e.nama&&"category-aktif",style:{cursor:"pointer"},children:Object(u.jsxs)("h5",{children:[Object(u.jsx)(k,{nama:e.nama})," ",e.nama]})},e.id)}))})]})}}]),a}(n.Component),C=a(97),D=a(101),S=a(96),N=a(98),I=a(58),w=a(57),L=function(){return Object(u.jsx)(C.a,{expand:"lg",variant:"dark",children:Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(C.a.Brand,{href:"#home",children:[Object(u.jsx)("strong",{children:"KASIR "}),"Penjualan"]}),Object(u.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsxs)(C.a.Collapse,{id:"basic-navbar-nav",children:[Object(u.jsxs)(D.a,{className:"mr-auto",children:[Object(u.jsx)(D.a.Link,{href:"#home",children:"Home"}),Object(u.jsx)(D.a.Link,{href:"#link",children:"Link"}),Object(u.jsxs)(S.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(u.jsx)(S.a.Item,{href:"#action/3.1",children:"Action"}),Object(u.jsx)(S.a.Item,{href:"#action/3.2",children:"Another action"}),Object(u.jsx)(S.a.Item,{href:"#action/3.3",children:"Something"}),Object(u.jsx)(S.a.Divider,{}),Object(u.jsx)(S.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(u.jsxs)(N.a,{inline:!0,children:[Object(u.jsx)(I.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(u.jsx)(w.a,{variant:"outline-light",children:"Search"})]})]})]})})},M=a(99),Y=function(e){var t,a=e.menu;return Object(u.jsx)(d.a,{md:4,xs:6,className:"mb-4",children:Object(u.jsxs)(M.a,{className:"shadow",children:[Object(u.jsx)(M.a.Img,{variant:"top",src:"assets/images/"+a.category.nama.toLowerCase()+"/"+a.gambar}),Object(u.jsxs)(M.a.Body,{children:[Object(u.jsxs)(M.a.Title,{children:[a.nama," ",Object(u.jsxs)("b",{children:["(",a.kode,")"]})]}),Object(u.jsxs)(M.a.Text,{children:["Rp. ",(t=a.harga,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]})]})]})})},B=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).changeCategory=function(e){n.setState({categoriYangDipilih:e,menus:[]}),g.a.get(p+"products?category.nama="+e).then((function(e){console.log("Response : ",e);var t=e.data;n.setState({menus:t})})).catch((function(e){console.log(e)}))},n.state={menus:[],categoriYangDipilih:"Makanan"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get(p+"products?category.nama="+this.state.categoriYangDipilih).then((function(t){console.log("Response : ",t);var a=t.data;e.setState({menus:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.menus,a=e.categoriYangDipilih;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(L,{}),Object(u.jsx)("div",{className:"mt-5",children:Object(u.jsx)(h.a,{fluid:!0,children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(y,{changeCategory:this.changeCategory,categoriYangDipilih:a}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h5",{children:Object(u.jsx)("b",{children:"Daftar Produk"})}),Object(u.jsx)("hr",{}),Object(u.jsx)(b.a,{children:t&&t.map((function(e){return Object(u.jsx)(Y,{menu:e},e.id)}))})]}),Object(u.jsx)(O,{})]})})})]})}}]),a}(n.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root")),R()}},[[89,1,2]]]);
//# sourceMappingURL=main.8171c3ea.chunk.js.map