/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import Product from 'product';

//   constructor (sku, title, price, image, description='') {

// Normally you would get these from a server
export const products = [
  new Product('Batik1', 'Batik 1', 25000, 'batik1.jpg',
    'Ini adalah batik yang pertama bukan kedua.'),
  new Product('Batik2', 'Batik 2', 33000, 'batik2.jpg',
    'Yang ini namanya batik kedua bukan orang kedua.'),
  new Product('Batik3', 'Batik 3', 22000, 'batik3.jpg',
    'Ini batik yang ketiga walau semua tidak suka menjadi yang ketiga.'),
  new Product('Batik4', 'Batik 4', 45000, 'batik4.jpg',
    'Batik 4 sering disebut juga yang keempat meski tak dianggap.'),
  new Product('Batik5', 'Batik 5', 50000, 'batik5.jpg',
    'Sebagai yang kelima batik ini konsisten menjadi secret admire.'),
  new Product('Batik6', 'Batik 6', 60000, 'batik6.jpg',
    'Ini batik yang keenam meski tak punya pengalaman menjalin hubungan.'),
  new Product('Batik7', 'Batik 7', 65000, 'batik7.jpg',
    'Batik ini Ketujuh dengan semua keputusanmu.'),
  new Product('Batik8', 'Batik 8', 70000, 'batik8.jpg',
    'Ini batik kedelapan walau bukan yang pertama semoga ini yang terbaik'),
  new Product('Batik9', 'Batik 9', 200000, 'batik9.jpg',
    'Meski ini merupakan batik termahal namun kupastikan kamu terakhir yang memilikiku')
];

export function findProduct(sku, searchRange = products) {
  return searchRange.find(product => product.sku === sku);
}
