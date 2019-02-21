# About

Anyone and everyone can create, edit, and manage communication flows in Studio, Twilio's visual builder. Drag and drop widgets to build voice, messaging, and communications apps, and save the coding work for higher-order tasks. You can use Studio to craft everything from order notifications, to phone trees, to survey tools, to SMS-enabled chatbots.

## get started with this

Get familiar with the Studio canvas and widgets with the [Studio User Guide](#).

![screenshot](https://s3.amazonaws.com/com.twilio.prod.twilio-docs/images/ivr-studio.width-1600.png)

## equip yourself

Head over to the Studio Widget Library to learn about available widgets and their configurations.

Learn more about the Liquid template language and bring additional functionality to your Flows.

Visit the REST API reference page to learn more about requests you can make.

## Build your app

Get inspired with guides based on our ready-made flow templates and common business use cases. Learn how to make an IVR, survey, and more in minutes.

---
* build
* conduct
* build
* send
* set
* forward
---

##getListUi (beta)

Use this wire adapter to get the records and metadata for a list view.

Get list view records and metadata for a list view by API name

*Syntax*

---
```import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class Example extends LightningElement {
    @wire(getListUi, { objectApiName: ACCOUNT_OBJECT, listViewApiName: 'AllAccounts' })
    propertyOrFunction;
}```

---