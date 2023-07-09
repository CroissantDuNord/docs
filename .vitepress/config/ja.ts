import fs from 'fs'
import path from 'path'

import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import type { CustomConfig } from './types'

export const META_URL = 'https://yuanshen.site/docs/ja/'
export const META_TITLE = '原神地図'
export const META_KEYWORDS =
  'Genshin Interactive Map, Genshin Map, Kongying Tavern, yuanshenmap, Genshin Impact Map, Kongying Map'
export const META_DESCRIPTION =
  'A Genshin interactive map by Kongying Tavern for completionists'

export const jaConfig: LocaleSpecificConfig<
  DefaultTheme.Config & CustomConfig
> = {
  description: META_DESCRIPTION,
  titleTemplate: 'Kongying Tavern',
  themeConfig: {
    siteTitle: '原神地図',
    outlineTitle: 'On This Page',
    logo: '/imgs/logo_256.png',
    lastUpdatedText: 'Last updated',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kongying-tavern' },
      {
        icon: {
          svg: fs.readFileSync(
            path.resolve(__dirname, '../../src/public/svg/reddit.svg'),
            'utf8'
          ),
        },
        link: 'https://www.reddit.com/user/Kongying_Tavern',
      },
      { icon: 'discord', link: 'https://discord.gg/aFe57AKZUF' },
      { icon: 'twitter', link: 'https://twitter.com/KongyingTavern' },
    ],

    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
    editLink: {
      pattern: 'https://github.com/kongying-tavern/docs/edit/next/src/:path',
      text: 'Suggest changes to this page',
    },
    payment: {
      wechatpay: {
        name: 'WeChat Pay',
        address: 'wxp://f2f0dd1rszrnqJc_gnlwV_lRX5dlZ1Dtn9rp',
      },
      alipay: {
        name: 'Alipay',
        address: 'https://qr.alipay.com/tsx11609thmpw9odmvdlxd6',
      },
      qqpay: {
        name: 'QQ Pay',
        address:
          'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=790489566&ac=CAEQ3tP3-AIY0v2k_AU%3D_xxx_sign&n=AAAAAAAA&f=wallet',
      },
      paypal: {
        name: 'Paypal',
        address: 'https://www.paypal.com/paypalme/yuanshenditu',
      },
      bilibili: {
        name: 'bilibili',
        address: 'https://space.bilibili.com/518076785',
      },
    },
    nav: [
      {
        text: 'Download',
        link: 'ja/download-client.md',
      },
      {
        text: 'Support us',
        link: 'ja/support-us.md',
      },
      {
        text: 'Community',
        link: 'ja/community.md',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Client User Manual',
            link: 'ja/manual/client-user-manual.md',
          },
          {
            text: 'Feedback',
            link: 'https://support.qq.com/products/321980',
          },
          {
            text: 'New Features',
            link: 'https://support.qq.com/products/321980/topic-detail/2016/',
          },
        ],
      },
      {
        text: 'About',
        items: [
          {
            text: 'About Us',
            items: [
              {
                text: 'Join Us',
                link: 'ja/join.md',
              },
              {
                text: 'Our Team',
                link: 'ja/team.md',
              },
            ],
          },
          {
            text: 'Update Log',
            items: [
              {
                text: 'Web',
                link: 'https://support.qq.com/products/321980/blog/505810',
              },
              {
                text: 'Client',
                link: 'https://discord.gg/SWz6RTWNkm',
              },
            ],
          },
          {
            text: 'Acknowledgement',
            items: [
              {
                text: 'Credits',
                link: 'ja/credits.md',
              },
              {
                text: 'Contributors',
                link: 'ja/contribution.md',
              },
              {
                text: 'Sponsors',
                link: 'ja/support-us.md#Sponsor%20Acknowledgements',
              },
            ],
          },
          {
            text: 'Legal (Chinese)',
            items: [
              {
                text: 'Disclaimer',
                link: 'ja/disclaimer.md',
              },
              {
                text: 'Privacy',
                link: 'ja/privacy.md',
              },
              {
                text: 'Agreement',
                link: 'ja/agreement.md',
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      'ja/manual': [
        {
          text: 'Table of Contents',
          link: 'ja/manual/client-user-manual',
        },
        {
          text: 'Guides',
          items: [
            {
              text: 'Automatic Tracking',
              items: [
                {
                  text: 'Introduction',
                  link: 'ja/manual/guide/auto-tracking/importantnotes',
                },
                {
                  text: 'Troubleshooting',
                  link: 'ja/manual/guide/auto-tracking/troubleshoot',
                },
              ],
            },
            {
              text: 'Framerate/Tracking Control',
              link: 'ja/manual/guide/bg/bgfrate',
            },
            {
              text: 'Multi Mark',
              link: 'ja/manual/guide/batch-selection/instructions',
            },
            {
              text: 'Canvas Guide',
              link: 'ja/manual/guide/canvas/guide',
            },
            {
              text: 'Easter Egg',
              link: 'ja/manual/guide/easter-egg/view',
            },
            {
              text: 'Hide/Show Found',
              link: 'ja/manual/guide/hide-show-done/hidedoneshowdone',
            },
            {
              text: 'Overlay Mode',
              items: [
                {
                  text: 'Instructions',
                  link: 'ja/manual/guide/overlay-mode/instructions',
                },
                {
                  text: 'Windowed Fullscreen',
                  link: 'ja/manual/guide/overlay-mode/fullscreen-windowed/launching',
                },
              ],
            },
            {
              text: 'Restore/Recover Progress',
              link: 'ja/manual/guide/restore-recover/progress',
            },
          ],
        },
        {
          text: 'FAQ',
          items: [
            {
              text: 'Account safety',
              link: 'ja/manual/faq/accountsafety/acntban.md',
            },
            {
              text: 'Auto Update',
              link: 'ja/manual/faq/autoupdate/updater.md',
            },
            {
              text: 'Installation Error',
              items: [
                {
                  text: 'Code 2503',
                  link: 'ja/manual/faq/instlerror/code2503.md',
                },
                {
                  text: 'Missing .dll file',
                  link: 'ja/manual/faq/instlerror/missingdll.md',
                },
              ],
            },
            {
              text: 'Launch Error',
              items: [
                {
                  text: 'Stuck/No Progress',
                  link: 'ja/manual/faq/launcherror/emptydialog.md',
                },
                {
                  text: 'Version Check Failed',
                  link: 'ja/manual/faq/launcherror/versioncheck.md',
                },
              ],
            },
            {
              text: 'About Login',
              items: [
                {
                  text: 'Login Problems',
                  link: 'ja/manual/faq/login/accountlogin.md',
                },
                {
                  text: 'Repeated Login Requests',
                  link: 'ja/manual/faq/login/clientrepeatedly.md',
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      qrcodeTitle: 'Discord Server',
      qrcodeMessage: 'Contact us on discord',
      qrcodeLink: 'https://discord.gg/aFe57AKZUF',
      navigation: [
        {
          title: 'About',
          items: [
            {
              text: 'Join Us',
              link: 'ja/join',
            },
            {
              text: 'Our team',
              link: 'ja/team',
            },
            {
              text: 'Sponsors',
              link: 'ja/support-us',
            },
          ],
        },
        {
          title: 'Legal (Chinese)',
          items: [
            {
              text: 'Disclaimer',
              link: 'ja/disclaimer',
            },
            {
              text: 'Privacy',
              link: 'ja/privacy',
            },
            {
              text: 'Agreement',
              link: 'ja/agreement',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              text: 'Client User Manual',
              link: 'ja/manual/client-user-manual',
            },
            {
              text: 'Feedback',
              link: 'https://support.qq.com/products/321980',
            },
            {
              text: 'New Features',
              link: 'https://support.qq.com/products/321980/topic-detail/2016/',
            },
          ],
        },
      ],
    },
  },
  head: [
    ['meta', { name: 'keywords', content: META_KEYWORDS }],
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
    ['meta', { property: 'og:site_name', content: META_TITLE }],
    ['meta', { property: 'og:locale', content: 'en-US' }],
    [
      'meta',
      {
        property: 'og:image',
        content: `https://yuanshen.site/docs/imgs/cover.jpg`,
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `https://yuanshen.site/docs/imgs/cover.jpg`,
      },
    ],
  ],
}
