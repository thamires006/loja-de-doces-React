import React from 'react';
import Home from './components/home';

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;

// function postarTudo() {
//     const doPost = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://3.bp.blogspot.com/-i1vFgdkwID0/WRJf_QLDD8I/AAAAAAAAAuU/ittg3IV05IM1_LyYUE40He3bYuB2Mr3_wCLcB/s1600/cupcake.jpg",
//                 "titulo": "Cupcake",
//                 "descricao": "Cupcake médio, Sabor laranja, Cobertura feita com chantilly, Confeitos por cima, Recheio de baunilha",
//                 "valor": "R$5,00"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }
//     const doPost2 = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://produtospredileto.ind.br/temp/doce-86-1920x1080m1.jpg",
//                 "titulo": "Sonho",
//                 "descricao": "Sonho médio, Vendido por unidade, Cobertura feita com açúcar, Recheio de doce de leite",
//                 "valor": "R$8,00"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }
//     const doPost3 = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://i2.wp.com/thefriendlyfig.com/wp-content/uploads/2014/10/img_7101.jpg",
//                 "titulo": "Donut",
//                 "descricao": "Donuts decorados, Vendido por encomenda, Diferentes sabores de cobertura",
//                 "valor": "R$30,00 o kg"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }
//     const doPost4 = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://i.ytimg.com/vi/DLGGtYaEOTA/maxresdefault.jpg",
//                 "titulo": "Mousse",
//                 "descricao": "Mousse, Vendido por encomenda, Decoração feita com o próprio sabor, embalagem inclusa",
//                 "valor": "R$10,00 a unidade"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }

//     const doPost5 = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://th.bing.com/th/id/R.f9cb536c6de419098b63cdcafc9b2132?rik=w50%2fMfywhq0FwA&pid=ImgRaw&r=0",
//                 "titulo": "Bolo de pote",
//                 "descricao": "Bolo de pote grande, Vendido por unidade, Vários sabores",
//                 "valor": "R$20,00"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }

//     const doPost6 = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://th.bing.com/th/id/OIP.0BXy8Q7-NbMjDMuGsymtEQHaEK?pid=ImgDet&rs=1",
//                 "titulo": "Brownie",
//                 "descricao": "Brownie gourmet, Vendido por encomenda, Recheio e cobertura variados, ",
//                 "valor": "R$3,50 a unidade"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }

//     const doPost7 = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://th.bing.com/th/id/OIP.bwDJNlV8EympqQgpDqtZWwHaHV?pid=ImgDet&rs=1",
//                 "titulo": "Palha Italiana",
//                 "descricao": "Vendido por encomenda, Cobertura feita com açúcar e chocolate, Recheio de doce de leite, ",
//                 "valor": "R$8,00"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }

//     const doPost8 = async () => {
//         let myJoson = {};
//         fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "imagem": "https://http2.mlstatic.com/curso-de-como-fazer-trufas-e-chocolates-gourmet-video-D_NQ_NP_675705-MLB27112093265_042018-F.jpg",
//                 "titulo": "Trufa",
//                 "descricao": "Vendido por encomenda, Cobertura feita com chocolate, Recheios variados",
//                 "valor": "R$4,00 a unidade"
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => myJoson = response.json())
//     }
//     doPost()
//     doPost()
//     doPost2()
//     doPost3()
//     doPost4()
//     doPost5()
//     doPost6()
//     doPost7()
//     doPost8()
// }
