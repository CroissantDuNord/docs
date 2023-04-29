import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = 'https://yuanshen.site/docs/en/'
export const META_TITLE = 'Genshin Interactive Map'
export const META_DESCRIPTION =
  'A Genshin interactive map by Kongying Tavern for completionists'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  themeConfig: {
    siteTitle: 'Genshin Interactive Map',
    outlineTitle: 'On This Page',
    logo: '/imgs/logo_256.png',
    lastUpdatedText: 'Last updated',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kongying-tavern' },
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

    nav: [
      {
        text: 'Download',
        link: 'en/download-client.md',
      },
      {
        text: 'Support us',
        link: 'en/support-us.md',
      },
      {
        text: 'Community',
        link: 'en/community.md',
      },
      {
        text: 'Support',
        items: [
          {
            text: 'Client User Manual',
            link: 'en/manual/client-user-manual.md',
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
                link: 'en/join.md',
              },
              {
                text: 'Our Team',
                link: 'en/team.md',
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
                link: 'en/credits.md',
              },
              {
                text: 'Contributors',
                link: 'en/contribution.md',
              },
              {
                text: 'Sponsors',
                link: 'en/support-us.md#Sponsor%20Acknowledgements',
              },
            ],
          },
          {
            text: 'Legal (Chinese)',
            items: [
              {
                text: 'Disclaimer',
                link: 'en/disclaimer.md',
              },
              {
                text: 'Privacy',
                link: 'en/privacy.md',
              },
              {
                text: 'Agreement',
                link: 'en/agreement.md',
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      'en/manual': [
        {
          text: 'FAQ',
          items: [
            {
              text: 'Account safety',
              link: 'en/manual/faq/accountsafety/acntban.md',
            },
            {
              text: 'Auto Update',
              link: 'en/manual/faq/autoupdate/updater.md',
            },
            {
              text: 'Installation Error',
              items: [
                {
                  text: 'Code 2503',
                  link: 'en/manual/faq/instlerror/code2503.md',
                },
                {
                  text: 'Missing .dll file',
                  link: 'en/manual/faq/instlerror/missingdll.md',
                },
              ],
            },
            {
              text: 'Launch Error',
              items: [
                {
                  text: 'Empty Dialog Box or Stuck Progress Bar',
                  link: 'en/manual/faq/launcherror/emptydialog.md',
                },
                {
                  text: 'Version Check Failed',
                  link: 'en/manual/faq/launcherror/versioncheck.md',
                },
              ],
            },
            {
              text: 'About Login',
              items: [
                {
                  text: 'Account Login Problems',
                  link: 'en/manual/faq/login/accountlogin.md',
                },
                {
                  text: 'Client Repeatedly Requests Login',
                  link: 'en/manual/faq/login/clientrepeatedly.md',
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      // @ts-ignore
      qrcodeTitle: 'Discord Server',
      qrcodeMessage: 'Contact us on discord',
      qrcodeLink: 'https://discord.gg/aFe57AKZUF',
      navigation: [
        {
          title: 'About',
          items: [
            {
              text: 'Join Us',
              link: 'en/join',
            },
            {
              text: 'Our team',
              link: 'en/team',
            },
            {
              text: 'Sponsors',
              link: 'en/support-us',
            },
          ],
        },
        {
          title: 'Legal (Chinese)',
          items: [
            {
              text: 'Disclaimer',
              link: 'en/disclaimer',
            },
            {
              text: 'Privacy',
              link: 'en/privacy',
            },
            {
              text: 'Agreement',
              link: 'en/agreement',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              text: 'Client User Manual',
              link: 'en/manual/client-user-manual',
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
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],
}
