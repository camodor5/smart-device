'use strict';
/*var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});*/


const menuToggler = document.querySelector('.menu__toggler');
const contactsToggler = document.querySelector('.contacts__toggler');
const menu = document.querySelector('.menu__wrapper');
const contacts = document.querySelector('.contacts__list');

if ( document.documentElement.clientWidth < 768){
  menuToggler.classList.remove('menu__toggler--opened');
  menuToggler.classList.add('menu__toggler--closed');
  contactsToggler.classList.remove('contacts__toggler--opened');
  contactsToggler.classList.add('contacts__toggler--closed');
  menu.classList.add('menu__wrapper--closed');
  contacts.classList.add('contacts__list--closed')
};

menuToggler.addEventListener('click', function () {
  if (menuToggler.classList.contains('menu__toggler--opened')) {
    menuToggler.classList.remove('menu__toggler--opened');
    menuToggler.classList.add('menu__toggler--closed');
    menu.classList.add('menu__wrapper--closed');
  } else {
    menuToggler.classList.remove('menu__toggler--closed');
    menuToggler.classList.add('menu__toggler--opened');
    menu.classList.remove('menu__wrapper--closed');
  }
});

contactsToggler.addEventListener('click', function () {
  if (contactsToggler.classList.contains('contacts__toggler--opened')) {
    contactsToggler.classList.remove('contacts__toggler--opened');
    contactsToggler.classList.add('contacts__toggler--closed');
    contacts.classList.add('contacts__list--closed');
  } else {
    contactsToggler.classList.remove('contacts__toggler--closed');
    contactsToggler.classList.add('contacts__toggler--opened');
    contacts.classList.remove('contacts__list--closed');
  }
})

