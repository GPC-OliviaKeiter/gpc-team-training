# Permissions and Design

## Marketing: permissions reference

The 16 Meta Graph API permissions granted to GPC's app, covering the full ad
workflow: generating and publishing ads, tracking performance, managing
Instagram placements, handling client accounts, and retrieving leads.

| Permission | One-line summary |
|---|---|
| `ads_management` | Create and manage all ad objects: campaigns, ad sets, creatives, ads |
| `ads_read` | Pull performance metrics (ROAS, CPA, spend, conversions) |
| `business_management` | Access client ad accounts shared via Business Manager |
| `leads_retrieval` | Download lead form submissions from Lead Ads |
| `pages_show_list` | Discover which Pages the user manages |
| `pages_manage_ads` | Publish ads from a Facebook Page |
| `pages_manage_posts` | Create and manage organic Page posts |
| `pages_read_engagement` | Read likes, comments, shares on Page content |
| `pages_read_user_content` | Read visitor posts and reviews on a Page |
| `pages_manage_cta` | Manage the Page's call-to-action button |
| `instagram_basic` | Link and access Instagram Business accounts |
| `instagram_content_publish` | Publish organic posts to Instagram |
| `instagram_manage_comments` | Moderate comments on Instagram ads and posts |
| `instagram_manage_insights` | Pull Instagram-specific analytics |
| `instagram_manage_messages` | Read and respond to Instagram DMs |
| `public_profile` | Basic user identification, auto-included with every token |

<Callout>business_management is what lets the system reach a client's own ad accounts shared through Business Manager, instead of being limited to the user's personal ad account. Essential for a multi-client agency workflow.</Callout>

## Design guidelines

| Resource | What it is |
|---|---|
| Brand Assets | Logo files, branded imagery, animations, and fonts (download) |
| Logos, Textures, and Icons | The shared Drive folder |
| Design Study | Brand guidelines and examples in use (Figma) |
| Website Designs | The website Figma prototype |

<Figure id="mktg-brand-assets-folder" caption="The shared brand assets folder, logos and icons visible" spec="Google Drive, the brand assets folder, folder contents view" />
