"use client";
import Link from "next/link";
// components/LibraryPage.tsx

import React, { useEffect, useState } from "react";

const LibraryPage: React.FC = () => {
  interface Magazine {
    name: string;
    month: string;
    image: string;
    download_url: string;
  }

  // Your initial magazine data, sorted latest first
  const initialMagazines: Magazine[] = [
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2008",
      image: "/magazine/nov_dec_2008.webp",
      download_url:
        "https://drive.google.com/file/d/11lOrN7O4FlOKJW9xfPTylv73XtsPK-er/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2009",
      image: "/magazine/jan_feb_2009.webp",
      download_url:
        "https://drive.google.com/file/d/1QMuSt3DAa7-0Ji6J9AKXGeOnlHFIoR15/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2009",
      image: "/magazine/jul_aug_2009.webp",
      download_url:
        "https://drive.google.com/file/d/1R3zVu7fx2n_B6XMNUjF-zQdxYI9Z0DXJ/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2009",
      image: "/magazine/sep_oct_2009.webp",
      download_url:
        "https://drive.google.com/file/d/1r9NrrNoc1YgSQVb8nWpNr20Avg-lgkDQ/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2009",
      image: "/magazine/nov_dec_2009.webp",
      download_url:
        "https://drive.google.com/file/d/1eRAY2QMnGWk0paxEmU-91jwu2YDrf8AF/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2010",
      image: "/magazine/jan_feb_2010.webp",
      download_url:
        "https://drive.google.com/file/d/1UZJ9Zb-BaJSI8GROvVMPlxntpbik_0Y8/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2010",
      image: "/magazine/mar_apr_2010.webp",
      download_url:
        "https://drive.google.com/file/d/1wrL5oFvYEIfhKy3yBtv9v-Lkmmwmr8i_/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2010",
      image: "/magazine/may_jun_2010.webp",
      download_url:
        "https://drive.google.com/file/d/1KpjEuooN1qBapk89gF4HQb-_S_ZxwvMC/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2010",
      image: "/magazine/sep_oct_2010.webp",
      download_url:
        "https://drive.google.com/file/d/1KAXCDCDJp6qiTQjRk5TMUEwhYCJOfwif/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2010",
      image: "/magazine/nov_dec_2010.webp",
      download_url:
        "https://drive.google.com/file/d/10R74xugE3yErfcxPzyRgOb1heB3_pBLK/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2011",
      image: "/magazine/jan_feb_2011.webp",
      download_url:
        "https://drive.google.com/file/d/1XDXqh09daP8rYJCbU0epzvPgZSTbl-LY/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2011",
      image: "/magazine/mar_apr_2011.webp",
      download_url:
        "https://drive.google.com/file/d/1qXAeVY-EPCw9TorxnjSwad40FcZGexuW/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2011",
      image: "/magazine/may_jun_2011.webp",
      download_url:
        "https://drive.google.com/file/d/1Hzg0_9d8GeG2T3WgLX3MeyFPszuELrfa/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2011",
      image: "/magazine/jul_aug_2011.webp",
      download_url:
        "https://drive.google.com/file/d/1oB4vwRbU0yGSQL1CKeVkz0Wn5lSILDD-/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2011",
      image: "/magazine/sep_oct_2011.webp",
      download_url:
        "https://drive.google.com/file/d/1suWjhgrAZlVyDY53K51678ELClo0zEh4/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2011",
      image: "/magazine/nov_dec_2011.webp",
      download_url:
        "https://drive.google.com/file/d/1rJRqGYoz8mD26bvj7jcNkMsPNTbYNVLd/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2012",
      image: "/magazine/jan_feb_2012.webp",
      download_url:
        "https://drive.google.com/file/d/1WbFTJBq5djPifdUfpb9wPJPW2F0UtGF4/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2012",
      image: "/magazine/mar_apr_2012.webp",
      download_url:
        "https://drive.google.com/file/d/1sRJd-yhycX966_wbrZk-4-h2Es3w1DM8/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2012",
      image: "/magazine/may_jun_2012.webp",
      download_url:
        "https://drive.google.com/file/d/1nTJuJEvEpwrexUhl1tkdAZOKAPOEewMt/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2012",
      image: "/magazine/jul_aug_2012.webp",
      download_url:
        "https://drive.google.com/file/d/1MMX4h7PTmZeKuoYxxwaJrOL7S4Mde8JZ/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2012",
      image: "/magazine/sep_oct_2012.webp",
      download_url:
        "https://drive.google.com/file/d/1J9nDTQlb8X6y3sednO06qzD8ZgRgTJvF/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2012",
      image: "/magazine/nov_dec_2012.webp",
      download_url:
        "https://drive.google.com/file/d/1aQxwN8yvEhGUKaDUbagne54RZvirm_xf/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2013",
      image: "/magazine/jan_feb_2013.webp",
      download_url:
        "https://drive.google.com/file/d/1i-VMbyAYf14sgddWHbG59iYLOcUeo46P/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2013",
      image: "/magazine/mar_apr_2013.webp",
      download_url:
        "https://drive.google.com/file/d/1YxpLmDUqO7t_szP-69ZFtdp-pAsaUGVT/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2013",
      image: "/magazine/jul_aug_2013.webp",
      download_url:
        "https://drive.google.com/file/d/1LYg-4bsvDokCdD1ZMD0ZGIOwr97iQeFC/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2013",
      image: "/magazine/sep_oct_2013.webp",
      download_url:
        "https://drive.google.com/file/d/1sXEx_X4Npm8S5M0zigDqkea75-bCUtRt/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2013",
      image: "/magazine/nov_dec_2013.webp",
      download_url:
        "https://drive.google.com/file/d/1g7TDGQVpo2EK2SPWhoQb6778J4x6FhvY/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2014",
      image: "/magazine/jan_feb_2014.webp",
      download_url:
        "https://drive.google.com/file/d/140Xc0uxZPvA4ECx02dnSgzPLHMEAnffC/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2014",
      image: "/magazine/mar_apr_2014.webp",
      download_url:
        "https://drive.google.com/file/d/146VyH1-_8GRtl49X2bSN5A1yj6-ztNRd/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2014",
      image: "/magazine/may_jun_2014.webp",
      download_url:
        "https://drive.google.com/file/d/1xepvIYg7J9dTBWJuXmoWveRmV8WBBp_S/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2014",
      image: "/magazine/jul_aug_2014.webp",
      download_url:
        "https://drive.google.com/file/d/1CdkIhBWiiyWdkv_gqXyUfUwmST3vs8MY/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2014",
      image: "/magazine/sep_oct_2014.webp",
      download_url:
        "https://drive.google.com/file/d/1EI5lXcKPEDh6sf0_rdIeuPpgMX_N7hsa/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2014",
      image: "/magazine/nov_dec_2014.webp",
      download_url:
        "https://drive.google.com/file/d/1yNqIFalj3zvNDPT8tsLsYAdvB6jOVPSm/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2015",
      image: "/magazine/jan_feb_2015.webp",
      download_url:
        "https://drive.google.com/file/d/1Cb2ooKw-7IIuOf1cRn-VtJhGk1CDrRu7/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2015",
      image: "/magazine/mar_apr_2015.webp",
      download_url:
        "https://drive.google.com/file/d/1FAqlo3fugS2nu3PWWuClrCL-_iPHqjKg/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2015",
      image: "/magazine/may_jun_2015.webp",
      download_url:
        "https://drive.google.com/file/d/1hMt9lkGqFM-NkfCO7W3_lADT4TFv1q81/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2015",
      image: "/magazine/jul_aug_2015.webp",
      download_url:
        "https://drive.google.com/file/d/1J5vw2I5g-hE5qh--tYTgDhCxPWm7dSw_/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2015",
      image: "/magazine/sep_oct_2015.webp",
      download_url:
        "https://drive.google.com/file/d/1OUZZ8em40jsL8wss0dHhUNkM9gxPP6WC/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2015",
      image: "/magazine/nov_dec_2015.webp",
      download_url:
        "https://drive.google.com/file/d/1m1vGaik4HYrm72OHLFXlP5_Y6VlYSomp/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2016",
      image: "/magazine/jan_feb_2016.webp",
      download_url:
        "https://drive.google.com/file/d/1spFMpYBl5r2YF7tf1wBuPDls1PRSFvf4/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2016",
      image: "/magazine/mar_apr_2016.webp",
      download_url:
        "https://drive.google.com/file/d/1EHE5sAU8UgkyeQJ6RYvArIuQF3jvvd73/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2016",
      image: "/magazine/may_jun_2016.webp",
      download_url:
        "https://drive.google.com/file/d/17ECbwEMjYIPJ1YYUTjvoqB6Lh0OV79tc/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2016",
      image: "/magazine/jul_aug_2016.webp",
      download_url:
        "https://drive.google.com/file/d/1wQa6udhR_Kut1ZJJ0G3cL-UmJ5RBDt5c/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2016",
      image: "/magazine/sep_oct_2016.webp",
      download_url:
        "https://drive.google.com/file/d/1gyzXMYdbxIkkg1MIpwQ3tryEoFy1JFlq/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2017",
      image: "/magazine/jan_feb_2017.webp",
      download_url:
        "https://drive.google.com/file/d/1aY7Eekw7eAcX-tvEmUiXK7bYnErZDfby/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2017",
      image: "/magazine/mar_apr_2017.webp",
      download_url:
        "https://drive.google.com/file/d/1-HbmvtWJ20v6y84F2kBSmOB_keFDtPg4/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2019",
      image: "/magazine/jan_feb_2019.webp",
      download_url:
        "https://drive.google.com/file/d/1-5Kt-h2Bmvj-8fSXS1ixJm_WB4W1qhsI/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2019",
      image: "/magazine/mar_apr_2019.webp",
      download_url:
        "https://drive.google.com/file/d/18JihN0y5xHHkZQ0j4y3cdANVp-bDEYJI/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2019",
      image: "/magazine/may_jun_2019.webp",
      download_url:
        "https://drive.google.com/file/d/1GbjHxB65iVcy8Ba02tKMjJQl_uLGG4ys/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2019",
      image: "/magazine/jul_aug_2019.webp",
      download_url:
        "https://drive.google.com/file/d/1q9pGIT_my_SnTfiBmcOh7nf0wOBbGTSY/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2019",
      image: "/magazine/sep_oct_2019.webp",
      download_url:
        "https://drive.google.com/file/d/1I02motj3fypamspvYbeMI13FFdPy4zOo/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2019",
      image: "/magazine/nov_dec_2019.webp",
      download_url:
        "https://drive.google.com/file/d/1tPEC37Pc7wVKx1oAClLW5puduu1j9J5e/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2020",
      image: "/magazine/jan_feb_2020.webp",
      download_url:
        "https://drive.google.com/file/d/1mj5atrIN6w-3BQ_30VT8nttxMFoUpBtA/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2020",
      image: "/magazine/mar_apr_2020.webp",
      download_url:
        "https://drive.google.com/file/d/1r4n2GA8ytOWryTapIJIaBzLO5v_lFeAN/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2021",
      image: "/magazine/jan_feb_2021.webp",
      download_url:
        "https://drive.google.com/file/d/1xM26g8OhgTmGAgK87zmzXOWLQmnZhI9N/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2021",
      image: "/magazine/mar_apr_2021.webp",
      download_url:
        "https://drive.google.com/file/d/16dK-GOdmNn-MgpQb56dsdqjitrl-vY2U/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2021",
      image: "/magazine/jul_aug_2021.webp",
      download_url:
        "https://drive.google.com/file/d/19wZqPORs9Xr5qp3GRTfohIroibQncvhe/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2021",
      image: "/magazine/sep_oct_2021.webp",
      download_url:
        "https://drive.google.com/file/d/1sZHsheVsE8KnmV9FLmXJ86LbPW0fEWw7/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2021",
      image: "/magazine/nov_dec_2021.webp",
      download_url:
        "https://drive.google.com/file/d/1FvRQVcpuzOtjGJwKz36tW-JaBeAv3RrC/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2022",
      image: "/magazine/jan_feb_2022.webp",
      download_url:
        "https://drive.google.com/file/d/15jQl42-s5UIU7P0cHc_5l7lYbxAAAwM_/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2022",
      image: "/magazine/mar_apr_2022.webp",
      download_url:
        "https://drive.google.com/file/d/1FjgjP7RkVmjoXOBQ0naDD8Pyomy4RQm0/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2022",
      image: "/magazine/may_jun_2022.webp",
      download_url:
        "https://drive.google.com/file/d/1hxVCK7YXhkEdoXVx31cBCCb4eG6Z3f8u/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2022",
      image: "/magazine/jul_aug_2022.webp",
      download_url:
        "https://drive.google.com/file/d/14e-BBCzk3tBUc7yB6tOFG5ohLkzR__zE/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2022",
      image: "/magazine/sep_oct_2022.webp",
      download_url:
        "https://drive.google.com/file/d/1D4l5wlRgnWfKQRe0QeayfGQrF9D74JNs/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2022",
      image: "/magazine/nov_dec_2022.webp",
      download_url:
        "https://drive.google.com/file/d/13ojweZdyb3aaiZDPD1XVh2G3nuFa_D2X/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2023",
      image: "/magazine/jan_feb_2023.webp",
      download_url:
        "https://drive.google.com/file/d/18hl8QBvDZSKyE7hEsoOq90UxlQEMR9-a/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2023",
      image: "/magazine/mar_apr_2023.webp",
      download_url:
        "https://drive.google.com/file/d/1wUxqLHdlJPQeEC6xOQfe05S9kcSBxN_C/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2023",
      image: "/magazine/may_jun_2023.webp",
      download_url:
        "https://drive.google.com/file/d/1gyh6thk2FF_xcuamHYj1AH4bun3Tknvz/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2023",
      image: "/magazine/jul_aug_2023.webp",
      download_url:
        "https://drive.google.com/file/d/16H5DR2RWi8l-pvoHZwIWDzdb3OHisGFz/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2023",
      image: "/magazine/sep_oct_2023.webp",
      download_url:
        "https://drive.google.com/file/d/1nfBeluoqvP2v0hM_zJqjnSuju6MixW5-/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2023",
      image: "/magazine/nov_dec_2023.webp",
      download_url:
        "https://drive.google.com/file/d/1m5XvonrbicW-IJYiUHsf743xnr1tue7g/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2024",
      image: "/magazine/jan_feb_2024.webp",
      download_url:
        "https://drive.google.com/file/d/1v8xhPCDrUiZi8m0MMsMG9lTHdZTB6lFS/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2024",
      image: "/magazine/mar_apr_2024.webp",
      download_url:
        "https://drive.google.com/file/d/11pnemBBkKeu1Ox6mCxoHReNJxZ9_9Md2/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2024",
      image: "/magazine/may_jun_2024.webp",
      download_url:
        "https://drive.google.com/file/d/1E1mF0DovL69Ojyxkz3CWDsX8AKGf07TN/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2024",
      image: "/magazine/jul_aug_2024.webp",
      download_url:
        "https://drive.google.com/file/d/1L7zngfzDFl3Hc8YHSfFl90dwEdaF0UO5/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2024",
      image: "/magazine/sep_oct_2024.webp",
      download_url:
        "https://drive.google.com/file/d/1BV5u1pEIKwTIVIVwq0B3eaRH5ifVkeTd/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2024",
      image: "/magazine/nov_dec_2024.webp",
      download_url:
        "https://drive.google.com/file/d/1b6kUfeSpXzvFW7LcnNr7fHhPGcaEOem0/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2025",
      image: "/magazine/jan_feb_2025.webp",
      download_url:
        "https://drive.google.com/file/d/1qP9MJayUWhzZOEZ1bbOkNXpSk-eHyHMa/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2025",
      image: "/magazine/mar_apr_2025.webp",
      download_url:
        "https://drive.google.com/file/d/1E9wu15LpkyK9d6uAMLtW-IWkFd2hvMq3/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2025",
      image: "/magazine/may_jun_2025.webp",
      download_url:
        "https://drive.google.com/file/d/1Gd8RciqEhsuQFD0N57vI3hew4kVBxZ3K/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2025",
      image: "/magazine/jul_aug_2025.webp",
      download_url:
        "https://drive.google.com/file/d/1Rf0okFKuXz5l1sIIbZfQX-3WSj_fDpV2/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2025",
      image: "/magazine/sep_oct_2025.webp",
      download_url:
        "https://drive.google.com/file/d/14-dVK1GAbNNUlfivRclDfGfbBh3cM760/view?usp=sharing",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2025",
      image: "/magazine/nov_dec_2025.webp",
      download_url:
        "https://drive.google.com/file/d/1Abglubsnwan-g8_JBRhn4rAzuKH5SjB1/view?usp=sharing",
    },
  ];

  const [allMagazines, setAllMagazines] =
    useState<Magazine[]>(initialMagazines);
  const [filteredMagazines, setFilteredMagazines] =
    useState<Magazine[]>(initialMagazines);
  const [selectedYear, setSelectedYear] = useState<string>("2025"); // State to hold the selected year

  // Extract unique years from the magazines data
  const getUniqueYears = (magazines: Magazine[]): string[] => {
    const years = new Set<string>();
    magazines.forEach((magazine) => {
      const yearMatch = magazine.month.match(/\d{4}/);
      if (yearMatch) {
        years.add(yearMatch[0]);
      }
    });
    // Sort years in descending order to show latest first in the dropdown
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
  };

  const uniqueYears = ["All", ...getUniqueYears(allMagazines)];

  // Filter magazines based on the selected year
  useEffect(() => {
    if (selectedYear === "All") {
      setFilteredMagazines(allMagazines);
    } else {
      const filtered = allMagazines.filter((magazine) =>
        magazine.month.includes(selectedYear),
      );
      setFilteredMagazines(filtered);
    }
  }, [selectedYear, allMagazines]); // Depend on selectedYear and allMagazines

  // You can keep the fetch logic if you need to load data dynamically
  // useEffect(() => {
  //   fetch("http://localhost:8000/magazines")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllMagazines(data); // Set all fetched data
  //       setFilteredMagazines(data); // Initially display all fetched data
  //     });
  // }, []);

  return (
    <div className=" md:mx-20 my-10 mx-[2%]">
      <p className="text-2xl text-center bg-fourth py-4 rounded-full mb-8">
        Welcome to the Epaphras Ministries Library
      </p>

      <div className="flex justify-between items-center mb-4">
        <p className="text-xl">Devuni Sparsha Magazines</p>
        <div className="flex items-center">
          <label htmlFor="year-select" className="mr-2 font-medium">
            Filter by Year:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {uniqueYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <MagazineView magazines={filteredMagazines} />
      </div>
    </div>
  );
};

interface MagazineViewProps {
  magazines: {
    name: string;
    month: string;
    image: string;
    download_url: string;
  }[];
}

const MagazineView: React.FC<MagazineViewProps> = ({ magazines }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-svh flex flex-col items-center">
      {magazines.length > 0 ? (
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {magazines.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex-1 text-center sm:text-left mb-3 sm:mb-0">
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                  {item.name}
                </h3>
                <p className="text-base text-gray-500 mt-1">{item.month}</p>
              </div>
              <a
                href={item.download_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-transparent text-sm font-bold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                aria-label={`Download ${item.name} for ${item.month}`}
              >
                Download PDF
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.6 4h18.8l.6-4" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="p-12 bg-white rounded-lg shadow-md max-w-sm">
            <h4 className="text-2xl font-bold text-gray-700 mb-2">
              No magazines found
            </h4>
            <p className="text-lg text-gray-500">
              Please select a different year.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;
