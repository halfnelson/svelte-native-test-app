import App from './components/App.html';

import { svelteNative } from 'svelte-native'

svelteNative(App, {msg: "from base app"});
//import ElementNode from 'svelte-native/dist/dom/ElementNode';
/*
let frame = new Frame();

let page = new Page();
let actionBar = new ActionBar();
actionBar.title = "hello";
page.actionBar = actionBar;


on(launchEvent, ()=> {
    let page = new Page();
    let actionBar = new ActionBar();
    actionBar.title = "hello";
    page.actionBar = actionBar;
    frame.navigate(()=> page);
})


    //(global as any).document = new DocumentNode();
 run({create: () => frame})
*/

//console.log('document', doc)
/*
let frame = new ElementNode('frame');
frame.nativeView.id = 1;

//doc.appendChild(frame);

var app = new App({
    target: frame
});

global.a = app;
*/
/*
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> CreateElement(NativeFrame)'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> CreateElement(NativePage)'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> CreateElement(NativeActionBar)'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> AppendChild(ElementNode(nativepage), ElementNode(nativeactionbar))'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> CreateElement(nativegridlayout)'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> CreateElement(nativelabel)'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> AppendChild(ElementNode(nativegridlayout), ElementNode(nativelabel))'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> AppendChild(ElementNode(nativepage), ElementNode(nativegridlayout))'
JS: '{NSVue (Vue: 2.5.17 | NSVue: 2.0.2)} -> AppendChild(ElementNode(nativeframe), ElementNode(nativepage))'
*/
/*

*/



/*

on(launchEvent, args => {
   
    console.log("got launch event", args)
    let nativeFrame = frame.nativeView;
   
    console.log('Got', app.getNativeView());
   // setTimeout(()=> {
    //    nativeFrame.navigate({ create: () => app.getNativeView() })
   // },0)
  //  nativeFrame.navigate({ create: () => app.getNativeView() });
});

run({ create: () => app.getNativeView() })

*/

