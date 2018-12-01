/* Menu on the top */
const {Menu}=require('electron');

let template=[
    {
        label:'File',
        submenu:[
            {
                label:'New File',
                accelerator:'Ctrl+n', //bind hotkey
                click:function(){
                    console.log('New File Clicked');
                }
            },
            {
                label:'New Window',
                click:function(){
                    console.log('New Window Clicked');
                }
            }
        ]
    },
    {
        label:'Edit',
        submenu:[
            {
                label:'Copy',
                role:'copy' //bind function
            },
            {
                label:'Paste',
                role:'paste'
            }
        ]
    }
];

var menuObj=Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menuObj);