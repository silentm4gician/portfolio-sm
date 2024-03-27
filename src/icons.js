import js from '../src/images/icons/js.png'
import html from '../src/images/icons/html.png'
import css from '../src/images/icons/css.png'
import bt from '../src/images/icons/bt.png'
import vite from '../src/images/icons/vite.png'
import tw from '../src/images/icons/tw.png'
import next from '../src/images/icons/next.png'
import react from '../src/images/icons/react.png'
import node from '../src/images/icons/node.png'
import sql from '../src/images/icons/sql.png'
import csh from '../src/images/icons/csh.png'
import cpls from '../src/images/icons/c++.png'
import git from '../src/images/icons/git.png'
import ghub from '../src/images/github.png'

const front = 
[
    {
        name:'JavaScript',
        img:js
    },
    {
        name:'HTML5',
        img:html
    },
    {
        name:'CSS3',
        img:css
    }
]

const back =
[
    {
        name:'NodeJS',
        img:node
    },
    {
        name:'SQL Server',
        img:sql
    },
    {
        name:'C++',
        img:cpls
    },
    {
        name:'C#',
        img:csh
    },
]

const frameworks = 
[
    {
        name:'ReactJS',
        img:react
    },
    {
        name:'NextJS',
        img:next
    },
    {
        name:'ViteJS',
        img:vite
    },
    {
        name:'Bootstrap',
        img:bt
    },
    {
        name:'Tailwind CSS',
        img:tw
    }
]

const other = 
[
    {
        name:'Git',
        img:git
    },
    {
        name:'GitHub',
        img:ghub
    }
]

export const icons =[front,back,frameworks,other]