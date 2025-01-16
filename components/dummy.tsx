import QuickBook from "@/public/logo/quickBook";
import Zappier from "@/public/logo/zappier";
import Sage from "@/public/logo/sage";
import Slack from "@/public/logo/slack";

export const nav1 = [
    'industry',
    'customers',
    'products',
    'company'
]

export const section1 = [
    {
        id: 1,
        title: 'payments',
        content: ' Create instant, scheduled and recurring payments easily',
        vid: 'https://www.trybrass.com/static/Payments-8fb7dc6bc3585e4167c7fde6ed0c3db7.mp4'
    },
    {
        id: 2,
        title: 'invoices',
        content: '  Send, receive, and reconcile invoices all on one platform',
        vid: 'https://www.trybrass.com/static/Invoices-66e6036951ae3a8692bf1f3db9804636.mp4'
    },
    {
        id: 3,
        title: 'cashflow support',
        content: ' Move your business forward with insight and financial resources',
        vid: 'https://www.trybrass.com/static/CashflowSupport-4801743996342110f5b8e21ad71070da.mp4'
    },
    {
        id: 4,
        title: ' Cross-platform availability',
        content: ' Bank everywhere. Available on iOS, Android and Slack',
        vid: 'https://www.trybrass.com/static/Integrations-b152a49a7fb05b4240154dbd56bdfd80.mp4'
    },
    {
        id: 5,
        title: 'team banking',
        content: ' Work with your team to run your entire financial operations',
        vid: 'https://www.trybrass.com/static/TeamBanking-6d02c773514e97cf47d69fcc086fa3ed.mp4'
    }
]


export const sec2 = [
    {
        id: 2,
        name: 'Simi Adejumo, Hustler Capital',
        content: 'We have to move really fast with our portfolio companies and Brass has helped us validate a lot of ideas and turned them to businesses with the ease of creating sub-accounts.',
        logo: 'data:image/png;base64,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',
        img: 'https://www.trybrass.com/static/simi-hustler-e41ea6af9e1b032774548a2d1c1ab44e.png'
    },
    {
        id: 1,
        name: 'Feranmi Ajetunmobi, Ni-Fries',
        content: 'Brass, with the sub-accounts feature, makes it easy to segment our cash and in turn optimise it for targeted goals.',
        logo: 'data:image/png;base64,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',
        img: 'https://www.trybrass.com/static/feranmi-nifries-82cce619334c31103e84d81b82ce43e1.png'
    },
    {
        id: 3,
        name: 'Olakunbi Adedipe, Odu Fashion',
        content: 'The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my bank.',
        logo: 'data:image/png;base64,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',
        img: 'https://www.trybrass.com/static/olakunbi-odu-84db5233ec896b858bd36431f475e84c.png'
    }
]


export const int = [
    {
        title: 'slack',
        constent: 'Add Brass to your company’s slack to receive real-time notifications, send team mate invitations, and generate account statements.',
        img: <Slack/>
    },
    {
        title: 'quick book',
        constent: 'Manage your business finance by syncing your invoices and payments with quickbooks.',
        img: <QuickBook/>
    },
    {
        title: 'sage',
        constent: 'Manage your business cashflow, invoices and activities by sync your account with sage.',
        img: <Sage/>
    },
    {
        title: 'zappier',
        constent: 'Connect your Brass account to the thousands of apps on the zapier platform.',
        img: <Zappier/>
    },
]


export const cust = [
    {
        img: 'https://www.trybrass.com/static/1b7d80b69f89b5b8b7b853684284c6e8/d9b9a/naira.webp',
        header: 'Why you need a separate business current account',
        content: 'The reason for them and how to open a Brass account'
    },
    {
        img: 'https://www.trybrass.com/static/2a5f9393829e28a0d2229ccccbf57e08/d9b9a/idea.webp',
        header: 'Working on the right idea',
        content: 'How to figure out the right business idea for you.'
    },
    {
        img: 'https://www.trybrass.com/static/fc944886806ae1fab24166b3d80a1b65/702da/business-credit.webp',
        header: 'What you need to know about business credit',
        content: 'How business credit can work for you.'
    },
]


export const faq = [
    {
        id: 1,
        qst: 'Who can sign up on Brass?',
        ans: 'We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners.'
    },
    {
        id: 2,
        qst: 'How much do I pay to sign up at Brass?',
        ans: 'You do not pay for signing up for an account at Brass'
    },
    {
        id: 3,
        qst: 'What do I need to open an account?',
        ans: "You will need government-issued IDs (Including BVN) and your company's incorporation documents."
    },
    {
        id: 4,
        qst: 'How do you ensure safekeeping of my data and money?',
        ans: 'We have introduced Two factor Authentication(2FA) for an extra level of security. This authentication is done using digital OTP apps like Google authenticator and Authy instead of hackable channels such as the SMS.'
    },
]


export const footer = [
    {
        id: 1,
        head: 'industry',
        underlings: [
            'retail business',
            'internet companies'
        ]
    },
    {
        id: 2,
        head: 'products',
        underlings: [
            'brass capital',
            'pay roll',
            'launchpad'
        ]
    },
    {
        id: 3,
        head: 'about',
        underlings: [
            'customers',
            'company',
            'why brass',
            'press resources',
            'career'
        ]
    },
    {
        id: 4,
        head: 'support',
        underlings: [
            'blog',
            'guides',
            'help',
            'BBC'
        ]
    },
    {
        id: 5,
        head: 'terms',
        underlings: [
            'terms of service',
            'privacy policy',
            'capital TOS',
            'card T&Cs'
        ]
    },
    {
        id: 6,
        head: 'follow',
        underlings: [
            'twitter',
            'linkedin',
            'instagram',
            'youtube'
        ]
    },
    {
        id: 7,
        head: 'contact',
        underlings: [
            '02017002000',
            'sales@trybrass.com',
            'help@trybrass.com',
            'business@trybrass.com',
        ]
    },
]


export const snav = [
    {
        id: 1,
        head: 'industry',
        underlings: [
            'retail business',
            'internet companies'
        ]
    },
    {
        id: 2, 
        head: 'customer'
    },
    {
        id: 3,
        head: 'products',
        underlings: [
            'brass capital',
            'pay roll',
            'launchpad'
        ]
    },
    {
        id: 4,
        head: 'company',
        underlings: [
            'about us',
            'why brass',
        ]
    },
    {
        id: 5,
        head: 'resources',
        underlings: [
            'blog',
            'business guide book',
            'community',
            'guides'
        ]
    },
    {
        id: 6,
        head: 'country'
    },
    {
        id: 7,
        head: 'login',
        link: 'pages/auth/login'
    },
    {
        id: 8,
        head: 'open an account',
        link: 'pages/auth/signup'
    },
]
