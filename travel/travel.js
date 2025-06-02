// Travel data organized by countries and cities
const travelData = {
    countries: [
        { id: "NP", name: "Nepal", color: "#2973ff" },
        { id: "IN", name: "India", color: "#ff6b35" },
        { id: "CN", name: "China", color: "#ff4757" },
        { id: "TH", name: "Thailand", color: "#3742fa" },
        { id: "KH", name: "Cambodia", color: "#ff9ff3" },
        { id: "MY", name: "Malaysia", color: "#54a0ff" },
        { id: "VN", name: "Vietnam", color: "#5f27cd" },
        { id: "US", name: "United States", color: "#00d2d3" },
        { id: "MA", name: "Morocco", color: "#ff6348" },
        { id: "IS", name: "Iceland", color: "#2ed573" },
        { id: "SV", name: "El Salvador", color: "#ffa502" },
        { id: "GT", name: "Guatemala", color: "#ff4757" },
        { id: "NI", name: "Nicaragua", color: "#1e90ff" },
        { id: "CO", name: "Colombia", color: "#ff3838" },
        { id: "PE", name: "Peru", color: "#ff6b35" },
        { id: "BE", name: "Belgium", color: "#b0b0b0" },
        { id: "FR", name: "France", color: "#b0b0b0" },
        { id: "NL", name: "Netherlands", color: "#5f27cd" },
        { id: "GB", name: "United Kingdom", color: "#b0b0b0" },
        { id: "DE", name: "Germany", color: "#b0b0b0" },
        { id: "PL", name: "Poland", color: "#b0b0b0" },
        { id: "ES", name: "Spain", color: "#b0b0b0" },
        { id: "PT", name: "Portugal", color: "#b0b0b0" },
        { id: "IT", name: "Italy", color: "#ff4757" },
        { id: "CH", name: "Switzerland", color: "#2ed573" },
        { id: "HU", name: "Hungary", color: "#1e90ff" },
        { id: "SK", name: "Slovakia", color: "#ffa502" },
        { id: "OM", name: "Oman", color: "#b0b0b0" },
        { id: "AE", name: "United Arab Emirates", color: "#b0b0b0" },
        { id: "QA", name: "Qatar", color: "#b0b0b0" },
        { id: "HN", name: "Honduras", color: "#b0b0b0" },
        { id: "MX", name: "Mexico", color: "#b0b0b0" },
        { id: "LI", name: "Liechtenstein", color: "#2ed573" },
    ],
    cities: [
        // Extra Cities in europe
        {
            name: "Den Haag",
            country: "Netherlands",
            latitude: 52.0983,
            longitude: 4.2681,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMNzDPJ136iIWE4Yfjd1tDyx1gD1zWi1q-9HYjg0VXYeRxdWhRGOjS1PyWKUmkGneimb4z3n3X87LFBFmSB-vJkzEDrR9p77I8IVtmLd-5c-v3pd4J8k0Pi-pdy2bh_WpYN182nmNMsTEyK9EmzAZmS=w729-h972-s-no?authuser=0",
            description:
                "Cycling through the city with beautiful architecture and canals",
        },
        {
            name: "Scheveningen",
            country: "Netherlands",
            latitude: 51.9081,
            longitude: 4.1772,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNSrCQ5GHRQekmoKfnshc0CKg1ZtB4EJI-lIHHEtiazLyNbMTjPjQw-eG0DrD64A9Fnpwrh1o4eoSSgXOCIA7t2PoA_wVEkVtE-guaVgQSMdqcfRD_NyAptn08kotW-pyqFo7NSsjUkPksDZciT2o9x=w996-h747-s-no?authuser=0",
        },
        {
            name: "Utrecht",
            country: "Netherlands",
            latitude: 52.0907,
            longitude: 5.1214,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNICWmd4HycGQw9INW8DaQmpoYVzopMgDlFC0blhn4h0i6EvMZRZTGq94RNgqz25Oh1h0xZZleGqkyOIW2MtzoKvT4FWkSoAucBpGzA-dngXX8UHaE77yBbBBpUkyhJ9rt26edS9Ltr5jHal5LAlF_4iWuj6lGp74FMuxwOTZ4UJu833UOZQfN77FXJT1oDGV4kZnTMemoQR_zIwAykc1dhh8DGYItEEetYpD_IwXWoIJPHtjXEvCPXd85Ysy7im_UkKhqr1UPL_wOE82Qak_4zh87ehJwagPqKYCez_Viv6e1BuwQwGPp6tHiQOeG6ycrFdZvi_WJjQAa5EaiQCr3yRQ-Xg3N08tyCEyxfvFjbyH9gA-ySFNEnftLSP7yt9A-Tquwr3m4-rJpkclE3k-wUwfKALNkKlIFEXNqUA83HZvZvIsjHKBTaHd4tDPinFGK8FY_l40ynyf7ShnITuDjoQg4dFpFZCpqvioQyvUjH893q6oreHTud-37zpTdUc_n_Y5IwIxMCCO1V65OFzHMwhFMOOGrXEHtgQPtqLJyAnGNOeHShOtiiqQSs_5jKjOcdx-TFkcrGoHUB7xlvLkanffTrEb8pA_nbfHdHXMd4Tr2eIED7qUD3XkQbNL84MkmAdB5pZygNk4mEkCGKBEb0v6KdeVLPfjWkmncL_x2FbJB7bnl0rCTuwwC6jdJcNx5v1B7i6m1boGfDL-Vw4BYOxFTsMDSxfRrsXzOzHSgNnwpY5FAlIOHqj4BM8dXEDuDaAHiG1ukqwRFz03-__zLeSnqzqWj1u6QLV7xW9QK3NofQzvsuTXn5E6o5WwRQSS2-JSutvWXjuVNfbMad1qiQWcz04Sa2X590jw5DNjxDgvNbltpCX5PqHejVnJ5ZfLHkNrkc-GVozFrWokS7xfbBPSoEnkI=w836-h627-s-no?authuser=0",
            description: "Charming city with canals and historic architecture",
        },
        {
            name: "Annecy",
            country: "France",
            latitude: 45.8992,
            longitude: 6.1294,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMfG31UFe3UX2Oimzpj4th5Ed3cAHdWCq0T6b_aE4oANh6UqtBrRDiZ1qonTNf9KnWiOsrSVFiqap3o6YghhNzkwFW-F7vxX-ifdTTWk65RdAHQZWk6YF__VBdrCAFYvydXeOnc51GQL3TstO9Zh20ChhN0FEgxDAEYapqz-9rFA80Er00ai1AEdQqloLfUH3i4OB8_dcz0jGnCsQkU7DnRDAO2J9AH0YL3L7o94tnmCmN_KR4aYrycbPwrDuH9De4uT_BposBOLPi0xdorlro2-6Hgie8qwCtYS4QeTD2gl-xMJguMaZ7U_KqPflANg70C_MNxygCrW8XGgj4v_HKsuwWjKaatWTBGRb6tfUG2IhwF5INyj_0Aa-GSm4mG0_4uf8ee51eTXb28BOyOIMbMnjh3IURbWikV9kb1JhYNDwhJJ7qCfqTD7aZuqXcZARE5peHVOmy1n2fUUhLhWWxn-kH_2wa5S6y6eV9SWdY63muBPN9PXw6bAsGN89lKFGTjDz_q9HNfJb1qET8NzxF_KvaoZPXNGZ_KKo1V2HD-QLGkSjZJdNn1JGlFf3hfl6ev95QFHTZTFIcxa6j3UwwoH1qOpVwNuvayFajzvS5OdoeNJ0YABEee2RR5BE8HKcTLxtYAKJWIQJZCd2i9ibxHqOwaxD6hOhGkRSMs_sM5U5dJ5ehELXNUk32iRuyXkPp5vmtFuEKjNSt7z2S39VmRgWlVUNKuFeVfHuoec3tJDnyLD86dVVgjsV1Tg1X_Pzis3sfHL_3aG8MK5c63smwm04rvVrxUcI6UQO8P-SC3U7Cy5ztlwRUQQ1tWf4BitR8gx1-ut7YB514cIhDxqU_yM2G9yMKCcdKWfX_64nxYtOpeaFld_o0X_cQ0EYB_aytlx-drENwH5cQ9dFy70EWoKAbGpw=w996-h747-s-no?authuser=0",
            description:
                "Quick daytrip to this beautiful lakeside town full of canals during the rainy day",
        },
        {
            name: "Bratislava",
            country: "Slovakia",
            latitude: 48.1482,
            longitude: 17.1067,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNsJrXJbMCOD3f12YCNaa0LkQctpD4NHNC5KPnu7jSxweNVPPMkf9HkS7rEr1m3IdhC8GWOqYyWCGBTKvA1PWeDxdJe9hCobymIcWz16siyDGWxfy1owSWhfkRTvwN-6jfrSoZtIJDPejnF9X0WrmMKZjwRcWjxOzQcmQGo_E5CghkjJa5tbuKyfL5tU8SOtTIkntnqrBjwyHnnEGQv6yrxfLCKiP429XYLoO9_E4b6PDOKBeiFU1uMKgiiCYbPd2e8Aw_6H3lh636xCY5pxEalOCUa6q8J_VhukjC63ypXTyfoZTLXteFKbkvzThiPtAqLGtMJWZC6Qr0WbL5gCQEXgVUxitpobNAsd2vGrywAdmQSaTXPmzVm5xo7MQlpXzMMjJsIf8Vjgia6X0O3s-lWai4ZnHS3Kauq6heiXtE3wh0EbSZ1AHzKc5RFD8FMDe6o6fatN01vIgEGEu1zMIQ_EcaiC9cSgZrA-afC-CiXDFp_JXYeklpshbWX6WL7ISo3tFV_LQeCEW1N00yamAGsE4tiVPzW3CGQMP8IsXJVCZeqxBe6LhfBs_eEuX1aennPEQfXV7qukxS1IYwexgVOWZL7XKkjc3VSC85JdkQ22j6RboPkf6kTJgF6wUnDOZgyDxUSrVdVG0qb2C8AS5XZ9xr3H1tVy3_emZD7UHSMu1mnSzQ1iM5ppu5xt0MDjMJHrea1EGUrJn8CDiEj5JmGh-DI44T7BT7JrVXgg-m5l_06H48mxG7PZFhCDbAv8Al8F0cveFZjs2QtSQoqOwESXbWhT3J5Oz22rqWrREncMd9u2IX2K1WC3hVIG1_UBIxAdY7wbpz6Iyw31E5e8NN6dkVdqkcKLFpfu98fxEAZ1BiA5KQYl6z23nJV3VmZudk=w448-h972-s-no?authuser=0",
            description: "Capital city with medieval architecture",
        },
        {
            name: "Budapest",
            country: "Hungary",
            latitude: 47.4979,
            longitude: 19.0402,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOsBao7nKbN5ARtFWXsxSE9W4mGPWFq1qzOgBB0RUy3PY8OINIyyNPFC2-2GchjxUlipMgtFZ-605rIhe04_PpEz6AzEc1InnpBPxYrO3aQs0keefJt3yPUoPlaAfkASbqpF7zVa4xD81u0bZfdClutinnRnQRiuUhPTZI6C1BGMuHIW-Vpu0xO3ENG4lQ_rKAqH1qd1ThxdZmkG3imJoSW7UhbTezgPIAqedwfjI0-phg9krwyj-FjagMFWaLMC0zHI-VqhZLak-gZ_zbfQrHlp_JTElrQmzdQHVoZmxWmVXd_t0WlKhPGNWiNluMzv3r0zmPlOtMOA7hnfIojQbfOEULlXbsiis4k-YRyNNmKnbGAQpT3NdoQsha6vvaRDMOLBfneedOtsgb1zqHt_QJH0AQ3akI0z9ZQAzvJGDV_OpNwMZ3KxaqLWJDRgMQSu2heEJWD-QmyjAD9HIjuqfgJBungBPkpjHZbMnh3Vsgb6MedmRTUOPWrJryj6R1A4tanW8eFJZ175Cd53bP4hXgSD-NlTml5FVa6cHsgelzUgAnkjTfmEz90eKf7pIcsslBaqYHZKXsWz7cKaoReg2I1AIiOm3s7Ql_yjBUEmEFh9A7AUXpBS8ybXaf_AoxlMJCfU0ei-As_hA0GD0DYO2vwdQdHOvceWWlAl3qTlBBeuSmVpwYQxA0x5BfOQOYsdAdLqbjfspJOGlhWkHn1s7spPJ7ldKhIY10YoplUIC4FB_yWEhnM5pEYLDAI0qwRVK_KHRSxqqqbE1nq7J4FZkmf4ZG1TtK0bTs1KaqnI0o5A19fM4YRzAol051Xv3ve36Uuj4kSdhhEVv2sViff68NbX7_nn_cdFIZ8gCTtxORwsMtlHAkBGYiCtGtxWrY9LBM=w996-h821-s-no?authuser=0",
            description: "Stunning capital city with thermal baths",
        },
        {
            name: "Lucerne",
            country: "Switzerland",
            latitude: 47.0502,
            longitude: 8.3093,
            image: "https://lh3.googleusercontent.com/fife/ALs6j_GQGEB2jEF7Ns-uzYCleN65z6a-IRfjFZSM4RV7_6L602QVsyYB0kQJY01Y4YSsC21EVAgPJmbn4iBZnEoQHPjPNFYkPW-wETJSStrbp-bVuj6Rr-s_pihfWwK78shHXb9gLnD3cii7Nm_zObmW1jkGeC4aBxdkJPlJcwVORVPzUEtrD2VOCTnZSxgHtQcgSBDxSjCmOjO_hIKXzuCLgInCJG_TsjJ7xurP3GwX11bbqpMWQFQZ-2UE3AXgXd8IJWv4rG1hWiPX7H_LzSeSmpM393j4o6Qzk6OT_x6eB2E8CLe2urY77lpd4Eluus5k7AOEzINIqeVSBJ16TOD_x7a4Sf-ZcsOECVJ9dnTb1Ro8van-6yoCc4FHf_Gsk79yAFR_soLujQoGMEhT7vIE0J9U6vpHBFkVbZ9id7svyp2_xZWvaqIh4fXDk61sSvz7TthsyiRDyi_vw0qorxQ0M2P1MPio93cEIChEUnU28fEy3bcffzgkbZCijhrIu-n6ZB04w10ucqX6hJxAp1PcU3mfV3R3xC8tpZUfDilnDA1fMjXVNJLuB_JYaKBAD57S5QsUXeKIPSSTN4VP6tOLXLX9QNxHV7PMZuLOX6Q3TmnCI3dAM3g_-LI-PzYacHidHDqYRK_N3HqGJYauFmwgiRrUYEqjMF5oWNvV-64nHM3ThLBMCm1U4YtvUJZgcMUoE-qZNABG5Bfn3yUkIzxjqonc9TohpWVFxErs1eGwEQe8tDIER3mJRNsouYT9VY4H0b_WbOYMJF8jPqZO3M3oTu4gU9iIUwVzR5UJBqbxVFCxoNgSDiXGU9UnMMbX011O53VXySG64dLu3XJ2oqMjpJf7yoV2DOjtHnz-F_mbE6oMNHySPP1FKUFTcIYy6Ne4Du8QU7GxQVU1Ta-CPfHYb2ShSH_B2szYPEVKopDtjo1rkL3AfSMhCtE36oXwNlwYeVfhgo5YzVzha-lG3GOt3nTTrwMOtt6M6G-1JQoa-_E8TqQ9yE6ycYyt7OjNKyW2f5eLO1lmUrF8hoeSUDPPFpbvQKF4OlVhK280dLHPx37J-QFwHf-_yHoMyeTT5dLNsv-7HGc0lNcvtCsW1lbU0B_3lIttwc1QS-UHLeQyXOeeLvdonZ8nDYZVyvWyPnvAkjJCfY6JRRHuiFDhZSni9rkVqddzyMftEnXznP6HM8apK_iln82eEluOwawH40CvHNng4_WZQklQz-VfFXOi-w5DSR5cm5x4Dv4NI99TAzImueORvg8jW5x7qq4kakfdS3gK5zfFEVQDVJJjfB8XOuT9XoGktvoKJiJrNcrsmHBMNTMFtYi2WPli_6fuCevYEmwMkwyA_C-Y9EhyrxQdmH_wpKhl5RET0J_AE2o37tGHASyA30sZK56d2AFwQYvpOz7EnPKzzpNA1T1BNQZDuN7F9ljKQlhsA4TWl2dEOpTNR0z0akjSTyg3I63LhjHwombUFj9Cq2_USpaAqayTzlvTStHUIxQCF38a_R_aS1rh0Hw7b7UxOwcZcDWURjEcuObnsVSu2GwyuGwqkJ1nIEs3C7Wr0vFAzYg215M85pw3uEK4cDt8i59eZ6njPhyPSqRciI3vumFqBhoukAJkS-wTEOn2nDDolIvWwyQN8RW1xGsVO-e5Ciiy56AS2tQ5WDDmmfwF3nOPd4neCRf_iM4PJFtQP-wi1M1cWsuU8YxDrPM26kNypPJ8foIKjhmAXwQPDJPNLkteBECtxec9-8qhUnxdvEIUiw_hgIABzZnGjIyv1wIbAwVsWdy-mFAunuN0G842TiFQG32azZn7EFG_qwoxC7jqh0w_sN1jY-E2f5DUPnGjr1pkd_TT2oVhi7irUxWEcXW0RbjHk5nkLMH0-Te-7ygH0j8EBN0o22qvrUbs-ZEnIwgeKmS2zQ1eyr_k_RDkycOO8GFyeKp1zBkiApRFCWVGHc5LJhw5RC3Kogj_wut93Gq20a950wmStuaI8BOuAtPpnSFRejC9FG3KF9LBqRAnT9Mc8ZAGidq3pXqzDMHkkB3NCyoNAHCqAZElkJTVQOt_oskNzu4ygFV2oL4EkSKlV13iWDC1XEgSwfkqUlznNuquz5MtsqnGRBnTkX93QmCuWirEr1tTW2U_J_8ZfoOLZ-TXF994NwSXbb5RUzr4uMRyLmRUu9xAay3_bvzfV9nCO4-iuCkm4H8-hh3B6QYM_7dsT3uz0G2X9hQuJTgXuaz6Qn5q9Cfacb15UNa-36SK8Th7f29y-BRkWkcMUGmh0CkH8PZffU2eKUUnJoRPZVuO-9Bg7nZr0v6pjKu7yTTtQuyteBX29WjaLPaH_PBcYhNZHsnmxj2ng9aF3UbPmFB8BJaXRnu9OZJ_pKwgkp1NZ2Ey_rpX138OLwBeWTrCatx8Ar5Rqp_WNZojztCb7i_22sakCtqALJYgJY3WZjbkT6Oj6bHUDob0ZIPNFID35SzellgMB0DYjdLvvTBNlAyxLf36S2tcNvd9QQZB2BhOey870awDR2Gwu1LO-XK7Pu4EQrSjkEN4izAdQU0iGLCD1OitJQH85IlEEJimyA-HrOJaCyG4ga_pGy8ht34Y1IPKUjt-A9-MQ5xEOD1zAmzfhU4Z4SEJEvOJPrIExsj3xoWj85r0kToFb7zmgg3ApE2rke-X2s7veJWUj1Q4XSBCG3sgirOQ--8pojSiLcLKp4stzF69L8CJxRQwJTI6S8y4ddugqbumgl8ZdXaBGYJvZ6UdEiv2lZf7dJLlYF0oK2HcJN1MStYoR3n-DA3NjFOPIh2Gj0_0YqqfRzUoPA17fOayX-6uKtxbzyHeEYt8Ns7c4fSEJVkzGFgChDDJezuDfPITZP7v_A0uTbos1CMEIAbVZspuwMZYZrt3rz9VZar3k5yFjEANOqo8LzBYKAvRNUnBWFRH2CDhoa3ibgjzqH5MIPe_tnJZpGRSo5lHz2xNy52lzgIzgk5N519-nEI2ls_pTaDPDlqD_5LHkf7ETDnhwHvAdmJgG6kSBtiwtBmRJloDinUK2wBzMiu4kJmsTZ1vARuyHn9LWR4nc1EaJ9wnHiu3izyProUoxYtU7Opg-LDI89d15iGk7hjtnft0taQHItKyBq3FmlMWf9qV4Bs-3gUDPqsR1En2kYwQGC3cmTSfxl3WJ6LEqYbN4JF2bsRMD8GMl2n3gdQc_kqE7YQFV2V2f9XsQAd76uFmlejmoRi4vXlVgJdclq9lV8GZoo7lCdi9BVEQsOxT3vuvJ4wcNheUutBgcywriNRkjp3yPRHM88Hh43zVYx3S84d4TkWZ=s972-w877-h972-s-no?authuser=0",
            description: "Picturesque lakeside city with mountains",
        },
        {
            name: "Vaduz",
            country: "Liechtenstein",
            latitude: 47.1415,
            longitude: 9.5215,
            image: "https://lh3.googleusercontent.com/fife/ALs6j_HAQkuq3N4QxSj9Gikcp3PtU1ZixKlk8oYnq8VovYO1RlxzURBTrsLWCxXsJDAIrBbnRTipOU9-Wu_3fFqebhGc3FqbFCdXk78FXNTycDfYERRlvzmzD4TeKTDMko-5Nfxw8OW9s51plPvAx0_zn3rH2HS2zPp1etKMzImfinvrQNe3GnKRAHN8dfaGAPIDO-dsR-zKOprn0xpq81t9tH-zHos0haOsQ1KjhZ2j3ZsLlfm0z0bokLwir_NLJY-t2tF9evu12MtMFodN5daI1mvWPI1SADE6sbMKIIS0XLIk19KzY6QUMj_iNWEyWwaHmHM544dIQsNcEr9dyY3BfY62sKqawQbSqFK1HYsvJCFA828vINklQ1A6cOTHE-YvtUlKNYxAe9uatNWRP9ShPIGfyxzDXuVmni2358OLSx1K8bymAHjXRYq72zq5sDo56tdv80YXBmms5mH1u2YA4iAchy39TllzRacAtOUvc6oOepwtSKj-7_MqsC-e1Y8gIbdbCIM6F8gNIrvXMCLTGZcpxcR_TajL6G25SRHTDCbjNAd2YMw1XkEMsfOaIVpDH8qQScMWp049N1iR3BZyFRF2jEB0CFefHQo4ysImYlGRy3O5elh8E4GKGP3rtK3iKWbY2C39Q8w8zAvAIiOwEnV-iVkkBDl4A5vvaugJLObBFgAHcWFuN19nUl7j-wdRBOj1nRlPYNbP4YYZhoUMgvO-Wz3DhyEaqmKlupG0sPlHokFhVV0RirQ9IKXeclMNpsPFlEMvjcx-NIdG57M8o4bczB8ogZIaxV3TY1b6Tw0f99-Uk8zEqq1cAcft9XDfwmh2SEzRBEnTN1k1_9nMlsEh92bgGXnorrE4QBQvLuWPivUk3ODYvlQuQSIctYY8pT9W9GFuBBJ0MBwu0XtiPVl_uB_3J4bpHprFn86Qx0QkdIkhPQ-64DUf2yJWeYQWpKOMVO3TQcYxxZPEiEn_MvUQDAg5uyhV148J-_XtcJRq7Rdp9EOfaklcj-paVtRskxDzBMP9gsCcscLBy-cj-aWULGxiUXXNTUdB_L0c6sFpGj9PbpLdqjK4Hlqq3O6U1NjItD4T7W7K_hFc19AKD5LkHYtdj5jQ7jLSunDgxg6bktIgP06iduM5qFHoToOc_eA1-Z7V57hlIcHaZ1S6JJXCZZpi44QpY0ZNa4FH5JxJWY9VyQdpw3Di537Divx7hXVwDMcO2dGNsUHhIGTULExBNX9LE7JqqTo9VRdojcYebQqw5kh9g0scOzD8LGAkzFAauYr0Yl25OY_8tMy_R62vfNzYI6NA7tpph_nSATHOQJwJadSshtQdlqU7KHjhYcRZVfXy0lMZ3EOT-DABIikl-2k-P2UzCs4yNQ2Xwnyo05Qhfyatj0K7lgJ7PDqrDtr5lNIze-gHizdHiUQXb87_I8VWNpvfL6JeypJR2e6RP6QvOcOXpHkvSOu1mfghYwuKQGS0cReAuSBr54Zl8RoprAR_x1B6PvSRSUqh9iN_c-9QqlkjLZ7zKr9lurNodjCgck3_h_SS9FOV3gSIOa5-Ch1eU15JoPDMKflP5FJvBVc8pJ2gqnG1R37Uiz1fyRaz5wjx6UlXHHMcpuQhdwfBkPy48KCe_pQ04Y-9EypIbrBZ4gAAV3B75HjiE4-vvYHVy3PKLkGLjTmOyqhgYG18-7NkhxySkgGu7gdoalDSeEiuLRDRfQpMHe6dcACOh6sGZ9IuzYCqFj-Lpt2l9O4ZASrvMbodiN22aRvBy1vy1kCDxYcsRjwfGemee6ios8wjFHko2uUhpSmxn-Wsbn5N4oDwwsU-gY9p4GYpvQrEMAUtVkb_XVyyw3QBBoP9FJOnPSE6jSdfo9ymZTYi8BR-d1RyrdaC6PQ9qqM14k6DSuN196wmpJv-cj1-QbZ18gOjQVddY3AvQJM6ksxVEypVFdHBak4duki3EDIylETBOUswDmXV-coZ1vCg8mgV4vcZXuojnL9_3NPXoaeF_H18tgNqsvEcUoMj0Wz-SAnXZE38vAYoU3PPkBXNS_pF7leFBL9n7Jjjyce2tbQ7kykLfaPkopjXh1bWdqnPzEjJt9EfGtdxqCWYH0UWyaAgVyVzI9YJin5ihPpnG472_MxQu7IklAAyuLKmoD7TcGLJkEPF4Fsdta671PRzIgfmEvykA8ZzHuA2Nm7DWvvtZaSLi2Iu79Mi8ELLF2IRkPHB1gSs6aWsuEK0HQij-yI5mdRoT0AZFb4S10D_QNVutLTxhLCUdqqg0mkhHdd11YaOPfRK1oBrF11dyMFZhMIjpG64Fr-dyhsagZHqdlFgxrAmUr0UNTvvr1RDjWj-NEE3KUf_g61-wea9XAsTgaUhzLi1zh3a9VLkgur0xY45dhzIbBBdvZXm6LohRHoFPmQdfysJOzTJT0-iBh5D1svXtpLlRY3CI4j6tS7aKL8Qhk4b5eyjNTqwnxbODDBsuDRyFqdNvGXZ0aO_DM1TC8ss01c8th8LAgz_ki5PpatQDbLL5d20RpYMB-KVBY5IaqLywbW0-H965icozYE1iBIGSExRFZYx4j6tvYI-hrbPmq0ebtyLk1kjSRBYr-RtndtJzCPoxZbb1O8hqWyBNpbq9Q0AqsseG9hyKqVae57lr4FgP7MkYC74CIWpFKME3ZOvLQURLIsgTeLozucdIXa4d4tyQX1v4mWw6DDTB_7R9FZZLfTheSHeY9pjPOgU_48f9D3V9OAvryTo7T-1sPpwxDW2gnAnTMVFdWcK_dslfHmP5m9HYuJzvmfprJUTd9YBrMPokHuqT6JxtVe8YR9rA3nOnzuNSW11OTSjeE1nGOSJwZ17IRH9JNht-x1IcdnhtUEigPTS1FcRkDtCCMQLj-F9tbVx-xMEQJL2N4EiHTEwd76ARIxy6lwKdSAL_BFMAhVYy90GpX-UYnTJ6Yuur4WnTnSc14mUF12U2eReEze9Y0oPevZab-xTriLvlzvWw_ehH4wo4MSY0HUm7u7YyBNnrO6YxEztFqevGtamh55o3x9XYKrFnv4jl94NEXgV3ocbQqwXIbSIt4HQ3uBiEGMwSnxi9qgFh7b2ooo6kF-B5D3ZBNQgEgQM3tsa30WfgX_y8uAHkdN6Yr96FK_QwWp6UCuO9GBmVYTp4nqzFu74KQsja9dpsqDH_EtYctsVRNoUtWX3HRELQbS2EYyn2G9xwmIw68Ekv21xN621zWOVfCHNWTLVMUq0VOHX3JU0lp405nigIstKrlshBbbQO_oS8skivG4uKFSegEhYMiHCxDnwva8IJ_D_CBqs=s996-w996-h781-s-no?authuser=0",
            description: "Capital city with a medieval castle",
        },

        {
            name: "Amsterdam",
            country: "Netherlands",
            latitude: 52.3676,
            longitude: 4.9041,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOB6tWQ9mIMZMhvO7DgvTm2y8Ab8CIy9T3gUeIOB8XqTzVZOCymJNSimjVkIPjQoh8FQ27BHEE7MPhNK1XgGC4zNKWiXJDPrq5QaEPKknAL85NpV7ZsLvIf9zZd_nw2JftXDLc_A9IijKBDTIcAHxyY9yYiPj103dJWV0GEuui-mmKY7X8xWTrBv7AYiiqPka8qStXBM49MqEVWBRLIlCBOLsEP_B8JH7jZQqM9PFoFZuaYvHq66q_zNztrLEaIB61_Ja-vkmMAkeD4q0ZyETpJO4YIftMZPj2k7fGVSCBB8X-X_3nYpqGAJyj7_ecttfMcPJHTkdFO6-v9jbpbqIGyO0TASwzd3bYI-o8UVNHisxgsQwBlqbRZgyxOLQzLLkiguNaubqMaX8M34ojZtPzzorOS12J8RgXenJMY4geM97imoKKugSAnKuaeQ7pICH1VyMySiNqVaboCrhCfqRRy3zF4bLij3bYVk9BaOIq6XsKgmeEUyRdlXfr6PfSONI17j_GhTgKlUMM92vE1fNFhFrFr7hnOYk1-n4Yn0_MRnmNY6UmLbYgw24UCiZHxsA6YWGmMet3YjaUioV5dx-yonlWRnD7XLU9310PFIeiyuy5ydne7PTummFRIvFLS4vs8HOPlGqWaKnPK0Oi2RJLA3cIC8pgaQMOW4-jnCCq_N5O7e0hqBBonT38WIQ7WAH-X42jElvI3hci7P5j-7PPjEtvVOt2xwWD8ITHTG8nMvPha8Xr3hz8jxMlEewldVKIs_BeYYG5r_xyNibzRJ0dHQJzHi6u8pZ4F_o3a3J-IfzbcGJEagNNWSzAy3u-4Mi0K0coLIKzFwXiUz-SzEh5eFacf9EdKgncIkpdAm-am5zcVNTPEfPMpPxYFFS7I4X7JIhpJG4K48-baPiPYUrRIo5MFOeE=w627-h836-s-no?authuser=0",
            description: "Canal city with rich history and culture",
        },
        {
            name: "Cancún",
            country: "Mexico",
            latitude: 21.1619,
            longitude: -86.8515,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOK7hxK2JpMUEeKUhuzh5VBkCxwGziW1QF87o92H3NLVtap-ARKLM9rIqLR85aL-8LkB_Y_JHlr7DqEW9FhDhpaNVT_7I7ku9OWgkyBYGs8_qVAJBc7IJlxjC9TqwrrDCQg0zMNRvWuCl5k35lyspid23c26DIaYUJgEmtPoZleEzqd0TYKJs1-B8gjY0iOTqkdZGbD0D0TG5xxwpF9j8uKg1BF9sYKxHu7CyML7ZpsrZMKWH3LcVMoY0o6zInXzOnDC8mCLPeefSEMWkYfFklayMZVVm8hRkrxDM3WKdfE0cL_y10X6Afaev-MwfJ89Iqtjn9ZoxUkvUdwzHYOi7k4OzOOxJcz1eC8_LHj372cfT-TVADehzjcqqQL2pP2iuFan6yLBzZcaomR2Y8J0F6R-nbpgpk1Z7YGyHididzRVsH4FHMWoFp3KOtIKKI6RUKgizg1lgSJLnNesagDXaA9ElVdZFG7nk04K7QGrYWN9Zy0qF3LmDchwtE1rn4xTLhjezjemFXq2raFzewXLPsFapCrI6f-AQdCSPRaes3Scn0kraLhSA_yvtL_noBJbok7TYeFc7GfEVTEhXHPs-jQStEUOr8H_Aj3XemrsD1dEWs-a4--Xeco7ZVhb-Yh6Ti3S0CPJ37CiKYi947vSbERQSK9CU2OmitmCyuLiLrP3bsxDBtEYp5Dxl4BzmsePUohEJLS0OXonaTb5GHGqxSm6Oitzt4ur4-iwxJxD1EM6o1S6HRI9WTsopE3xLm4DBJmEAYpu2PcGMDPukvxUVSWJrED8JjoMCkI74Vd-jIdKZmk2V-PhAb5-vDEGhDkuCLq2v_RZLGuMiEa_QOhk6IigiwJ0if0PbnptXAj1UhcLor_HX3RexlTMXNxm4Dpva0U6GdUMNj_gQ7Ah9xUlyVDFglwmW4=w862-h972-s-no?authuser=0",
            description: "Quick layover on the beach for one night",
        },
        {
            name: "Philadelphia",
            country: "United States",
            latitude: 39.9526,
            longitude: -75.1652,
            image: "https://lh3.googleusercontent.com/pw/AP1GczP82IrU8XtUJAagB-LRb5T58rtjan9XeoEokOXKX34qYLeL8IzXTfbho6cJg3MCzQQyH6IDobi-TslyxU7A9m4BDZTyAXz0I3-qdAq2KLyO9VUGMK9U0vQnk_o45bEaTxc-lCu1FaWklU9sLjn_r6wEtkr-_XkXUflzJPG43j8CYKs8m9csAki77pVnuK8STYqVYH0MfVNb5ZoDUErb4uowlVE7XtvxHwXB3M7pqvH7k5vdZaRn07EkwEZnspm0L8YgD447R40I5vm1x_w-KhZegIbZRWgP7LXQZtVdrUKtXj6X0Azbm73TJ-akJv9cJjJVuAQlJkpNgGaHMPR-H1S7bQiN1durddAlpRUynNy2onnffhlHyKv2D8rO2ljpWUDDO7poxizEVk6E-C4eHbmbxWGLUs4iQOZkx4lAZkKfQx5whG6O6clq7tCYLm8l2DIqkvr9SnArnm2MFahr3MnShRQhDzbl3QB6oCHrSXB0mKa37bQlnEFLr4hSdujBxETQRCernWHxaV6YA-PJ_ktQvrUmOdS9aKni_SIPDh5lmeWTVtWdRxK7IQINDn57nUPw9_4lTmRhcXLIUukyGVUWbVP3DiMPt7odCID_KMS98qoTVCWzC5Z1m8kw1kddVQ493tcsiVA20tMOkjV5E-h7IGEzp-QzXkuNlipVHTyRwnXQYVO86sJHROMz4vjXstP6ybuB76YovWBaWFhqLkGz8N4BPHL3TrCMABU_C-IIsZfVHddeO7KO9cmtXDEyHQbz3E_4uY6S2PXEz8fQtXyfIPCjHQO8ovyQDR5d6Kl5Sxr0_dKYEXqMCtOwGuQfxCI7veyUBUeqWwPplkciTUKQTD44dWrRe-3KB70ZWtx4Xq3nfzyijdOWBfkf5jgleGCn6TsoOKO5xu3cehLfCWX_iK7dMQ=w996-h747-s-no?authuser=0",
        },
        {
            name: "Venice",
            country: "Italy",
            latitude: 45.4408,
            longitude: 12.3155,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPKeEohEM33-ApWzb_QaoY8vz8R5_l546DtTK0IOHhC-ekGl1FomPFsYr7ak-38IryBIZN8FWTc948toUFiDP2FmA_vmsAa8SEOLj8F1HsgE6t-nZ9E8G9sd_UvKJKsPFY1daVvzs79jNc2smBXrc_lZiZ15DvHqUJ8e5jP9wIEBJEZ4D6wHOlX0Uj49LuGkdXQZ8Qfe_F29sdFzNg4dNdPWgk7Tp75HwlYtXIRUfSHgE35fk0MdMaKfKwFHYaioYpZw2PGzReW6Epl9HbyYuKyFQQeqzoFMdwBMetRUZCOpIs8loWvzOQwv7t8gdKPKRSpW4tzGEckaI_1RRnHJzY3uStGj1Jbgw0xI0WsNErYfP4bo59Q-Kj81MV1dfv0DaVcZW7BErQIBD-P1KctdeUiLmv-3tnwqxSYaAbVqGXsKEx8hde1V5vURo9Oe5vVit-HSkK7tS1COSxlZ3cHnpfSWCuVb9Z363YGa5zb8t6ehp90Vg6bb62f7dthLQICGa0vo92xGdAcGza6VkaSodc_Dowt57yGcYuUQ_do49op-HOdY7Xy5gqlQWA_Gg0uY_pFkC4ZrxK9XbVO801lu8TwajEsS7_V2Wzk6c2oDoEh015pIUAWGZAYuCHR0vZpxlnQKFeuSal5QAbg4kqHDkT7zIDYeU_QUhWu9h-_1wOitA7RkOfBl3b5tctfOCz3QBFs95P3WolhU8oi66Sus66NN73knHBWqlyPIqkkLEPAk6PrMLkDScv9TUamZ8uf7ykcIwOJn0_QG2pJbCxJKwf7yJF7yXQ-Ly64oruBwrMwrpdEGYhwwW4Z23-jxAfZQqDAI_iagBVyw7nlTVERHMmxEafa8mkNpUDDQLu3cjezcf5rWDGzIynAcPp4ndrfyIToVlcD6RC7F70Jr7ibkwxU3f3ULQ=w889-h667-s-no?authuser=0",
            description: "Unique city built on canals with rich history",
        },

        // Nepal
        {
            name: "Annapurna Base Camp",
            country: "Nepal",
            latitude: 28.5312,
            longitude: 83.392,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPxNRyddDgfO-YHMoDn4ysttzJqR6MSlDDrA8ITD7EJgj7lYmcnpYxTImSe_5ZYlcLDqcsx7YfxEg2Rq24_6y2sCt_ArbcsLAgCxkOiGNQolYS1NmXNclm0j0MyKF2EreEXnePVwzmDK99ZJSjO44sSZ4BbQebYveGSRh1_O4skQ-pNminxevl_v3gZv09LhTX6numeeuYu-PQ5hw9OLJ2aBlhg_AIRs-28lslizwgtXe-XB7YpZ_qAwMxlVbOVi5OL3rr2ep-o8xNWSjJxZLQS6aSmoqcTxdKS65KXhCPUAhAk7MuaxcZTldspLuJW-WtJ4OoENkZXZ03BeVKU2Pmt0LU4l8FnsVv9izzyRahF9zuF-YEvvpb1JiBFrNMByeMWl94hyDqWBg9ZXGpESkRTIW-khF8-qWplvR5WUqrm9j5PWYjkwRzUkUXDUSP1gUMlKRldrmFKAUYAFIVHwFV2I0mYF2S9aVbg47-leO9MwQnlfgA7W0YnKXqFPnUn6pVO7XNByAXNR_7NE3mxWeR8JxmSpHUcQVfLyg8nIJyRy_lCL8Ludffm_7C_HEReYTI6102HnOeaJGGOkGsjWV1pOJeaSxSQYQrrkZIJM1LGt8RGbzQrEXn0xdNn-Y3MNQnjHM28MrrX8FW5E2lH-kmmjN4Z-I63VpxL0BMl-CQ5LD9D6TAybAe6oLZoKHPo5MjkIUlfFqi1caWfLq8HtIZ1Q1HRfgQFQKoFgOfXiADZ4EjTDmYpw_Yap0IWLGbofepK9f44RMZuzZ3y8BkvQsqBYQqvxRJW8veghnkUNymoPapVVLbsZ4Ln02GDw8Ebg-kk6dXF-3BfRxPSPjr9NlV4UO7gXyPZ8yhk3mO8lLIpVEfdNZgCItjM-zDpl_FKuTs=w996-h798-s-no?authuser=0",
            description:
                "4000m in the himalayas, nice views of Annapurna range",
        },
        {
            name: "Pokhara",
            country: "Nepal",
            latitude: 28.0096,
            longitude: 84.1856,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMMAy0U3fRBRCZY1Vs1sIpalBu1s85h9jOVshy8klJUTac2GqBN3gUZ-isIXjMppCQxVEwBC4EWUeQlyzsL66drA68N6OEfPkqx2IloUQnGaD3qPBFXIJ77Jo69CL0PCU9bVnegmrT4za375KNm9QnThEKzDC3u46Gp8n64AJUzq3zw4_vXYKpl8mCMRVufaHk_Brim0IzAmkow5wvz4SZNVLOQYjkS5UsgRJUHgMK7w-VVsTPaMUyLP_aQGMIAb1-YxAW_vh6AnV1w0jU7VVJdSQ-KN2drlOmOpasklxqKPL5NjfxkVM9316QmbeZP79F07W4kuFy62l-8k4P8vIrWw7ytA8fDWVx6KWJQ4erc0FsjT6EdjdbVr-JU565bJzBmPpGMUTgBUbPM_aUVCvxWp71TquBGLi4df_gnGHkSN76kpdPUz1OX4BGfy_bVoSkgrglsMgViCL4o8Rqw5XQ26rzI4XpN_5qkMEI7eclQ6ClTac-eAqk-KmJ-38XviBAKPf4BalpA2oFGUOZgji4zgvveaKErw3OHnT9YGb8nb2FkrZQsXkaKmuiSFdsT1wbJpauoqlSQJbzEwWS346pKm6TO5PD6iVTO9WNgOBEND_5zYUtqpeaI6RrBiXLgU13ahvTM59iqlHvQkUIb7areMNDOiAaRb8aM1Sqabzw06U2_pAQCdLeN2Hw1sK3O3baZP-OfcElIB7_tgPj9srVpncgYr-gvmQjTow49uP5AxovvuRo5HIM5l7WiGOnGbZIWrYMrMcc9qlHpHhBsVBxPGRfiBb4xeGUy6OFbW79uSubXEBwidMqk8Fv33G2a-mH-6h_DUJBUAkd7gEdxSS33s6-DuyAtjXfL8BBaywiHGUW5Q_eLFJt2_SEGwsg50JsM1NZ2oP2VeSUendwMozoY4d0GNs0=w996-h960-s-no?authuser=0",
            description: "Beautiful lakeside city with mountain views",
        },
        {
            name: "Ghandruk",
            country: "Nepal",
            latitude: 28.3894,
            longitude: 83.8103,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMoAyYSib_Oo98mpt2d97qN7vxrbhxsealp-G03sZdqodvfuuyljGjbxcxQhEaK-u-8zy-Ku4SAbS3gSp8iDh_B4DyItNNCYFxv11x3xsyNH1DAPDiGibo7kXpHe3czYvk-5ijCWTOD3LMPh_sgzMvVsUy_5oEgoxygzR_VIQv6rVwXhdBoU823L3RI-j62KhkGSmlE43MC8PqjQywW65Qt20b9Vrxd4F7jY_WituAXxDOzXHjONAr_O7qb_ntvwkaF79svIUehACFEiEQfiatyjPQn6YLKtDLnVNMO11dcuOizU6d__jH6HxrznOA-c7kRMLTx7pidxWpRsNxGQNxBkmbsFo_2BQqi1ppUsq7s_CRdx7xvYaDU_Q6zPJDQVXxK0BAVe4crDTuZYpPC7tzEhobvUF6N1b0ocAryXrAGVPEzxX7MBSuGro-5SXU-UgW9Ui4ZTZm0p6jICT8SKou370wXD723n7SWvloccWfC78xgnUvfrY20Gw22q9F7r-A3DrvCtrbTfhDVK-hpPUr1fxpqsETowuHoKssp7hr--amINuPM6k3_fr69hXSXQD56dgCqXjOzUfo-K9iTZFq3bHnUOrY82A2rKKGy5Di0Q3GrcwOhX01JCnPdopt3Q7eHZgVK_L_wz52CCNxAjVwrK9Zf7VK4rLKfMw_guSxyozX87ULeauUZYNrHYmXsyPg4ynHxbNy4riEMYr296ZCW7lyfq0-0omN7Dvn82pizZoN2-npkP-5e9vY2flLSWwLbUOm5yPGqrKzOn3jJLpkQsaqpjS0YoLcxa5xoC_FVrA7w4arK3drEHppdOTdynOFuWN81mivzfkLOhUhX9nfjS-P83JK47pmXlsnjH_uD-NPCku1MGnd0LGkpEgLzP8s=w996-h940-s-no?authuser=0",
            description: "Traditional Gurung village with mountain panoramas",
        },
        {
            name: "Jhinu Danda",
            country: "Nepal",
            latitude: 28.7894,
            longitude: 83.8103,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMNuWfpUw9Voxu2qFyUWXnnh2S1F1mIjq4bvFFNHtVTPeY01WbrOji5RdjE6P4az6ac0cSgvpLfrV0rxEseMcvxbRm34uFeyx3shGavQFDuCW-BuTuOEQrmawKK7RnopH5Uo50gGoEz4lN1X0LmixZcPCON0bgVLUGF4znmlc_ZR-1laKQrtVZECRztVty585qEb8uK4H3iX5US9ilDQCOEk2Sd7h4svgTyZ1owBTqDdc5MLb2JPrmSS-7n8h6J2DyGMLPh9e64YpBZDQ9gvrcWc7OlhaUtZRJtLTs5P3zlmcAj4ljT0BKjs6OZc_Xz1fygJTioq-VbOcuZDC0W7QBnBy00EHC0twtcQ-HUwuxC6w_YO3wRNj_fb0jBs2SFZwL1NvDJ-QMLidgeG-UiF_auTprW64MgLM-OLzsKMjFJo3CI_ZHWF1T5yimlXTJvyKkVJXjaq_yE546mjaIW50Nv-3QUcySqjD132rAzjOtPnaixefkZySTvFlvui5pmYk0YZRVojYRf7C7hMR55UYPm4QEQyogNaGYzR0rFaF53GywoLOWzZ5602KnmaggHDLKA4nKjM3-Ef34LVLMHUzKEqhhtCaZUrB-W1ue93qv9h1gkr711-xmY4FF4FQAOdq8LUOrg0AfuhTkeJJ4QgCrbjlQ8JMKtj1cewT63zfPEH7ZwtybZwdjzJdaClS4Jfc-WuFPhbcaxXsCv6PxyjYoKnvbKmypqpB1InB4wP9k7LAKZkWEoqhxCMzQ9UBK_zjjpD_RM-vtPV-uFh5-h5XpIz_rg4tfcdNuDXg-wsgViDUvI2dmqzNeYXcrl2RmVm1Q0-meJ_dpc2MmfMyM2shIYjCrWNTf0OO6EQIjaK-Rfw8xIyc1OQnyq0ufr4YRiNxo=w996-h752-s-no?authuser=0",
            description: "Traditional Gurung village with mountain panoramas",
        },

        // India
        {
            name: "Rishikesh",
            country: "Uttarakhand, India",
            latitude: 30.0869,
            longitude: 78.2676,
            image: "https://lh3.googleusercontent.com/pw/AP1GczP248POcxxYW2QxihcA7SHCuQXG4oT43U1NW3PDdxG6-9sPwYrw1k6k9dKQ5im-kBmf9fzhrAV32prXu6ImCyLMhlkDvISnMoEW7hfBUGgNfzSg0G0FEXTqJu6yXDR6mjkuNFaCn9LcOEAFziatEQ5aU2C8GWk9te1kTnpqOjm4XKeG78CuofpwyR1bx2P0Cb8-au9bSEzkZyIAV86lMEAdaosesFKx2CubHta8_TheEfQPtv9Nfx20k6K46vjXYaIhmHAdZrRhDPXxeaLcsRL_6vWnSQiSYbmsh125NqW1B_Mm3sQ9gqHrZbJuvdFZBmgTgoxTUqFsnte4yE_6rHd59-JKez2QwWUAm8nPLXNAaWEul1McYkVZkD-FJ_QrEnUZxysMQJBMmG9hP7Ijf9IQozvr1BAy9YHQZvxpih33Bwth5vQuJopUNgj0keURVXu9ZATHJCoDFhHlKCqIZFPR_KcHFoFKhxyz5c-ntIIQ6HdGS3U35BmIbR-dmLaYJOd9vZU_SGCUUqm5C8gvfu9EBsSBKI8Iusx_uHcMWV5aqAjJ21z_tzgSeUqjn9-2WkVcom6Y42ksEAY2Io96kzTNKCDvAwLG0j8mR1XxtqeZvxVXbgk0J1b2S5tn2LX86VO_1x7shlEswjEkzqE1lerGZYvuvCb_rqH0mgidgndpNATOseNbdIKXawpHumkmy6a-7XK4Dlk3ReQG6vNjjnuvmi0S-nvkhHOk9_HhjjvkFJooeu1DQvQB7CKnuG0hxDwathCHvQreQ1604jXKuYklN7uX3PwguCluf6oaMduImW-PyU_nzQW2IMjIJZgJ3-SXoTHUPkHx3OBu-v5Foe2bBnAKybXrNLPApvlR5VWjuQUoW0dkPhPShpTOSVe74tHp=w884-h972-s-no?authuser=0",
            description: "Ganga river town, so amazing! Beatles visited here",
        },
        {
            name: "Agra",
            country: "UP, India",
            latitude: 27.1767,
            longitude: 78.0081,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNdr6ZNOYC9J_0qBW2fbsgAUEbESErWdgVNcBa47PUVlqp2xYL2adiJ2m5MguYZhtGihpnWbbxNUR5QmL8PksOdLGqblEvuf-6xff56WGnKUsa9zmtRTpJ4HYuzcmFfvYIPWMvkwUWrWUqxiAqJTtIGVOBAg0i6xAmyBPcb6d3DdS15Bh4wQcGN2VKz7S8NZLmJctoTJ5hdHTfgBs8iCx8g1ERh6TzOxrD_DOQEAQPLFFSXaDjJN3GWZhjINrDF08JjejHEt1ts0H6BnBFfke5qstZHOd7F5uEhrLha7mp65dKvstYfLMWsTiAe_XpHPXnGOw46IlbGpUgl8vAVpbZAfEydT4ZEGlDN_ZdoH4Zb5oTNYeQ18lXd0DdTaDZP9ke3wwD9DXgwY5zEjYkD3LIW8D1GHQ4txdC_4j_9ALFZrN9mtMKXbs6HpAoxZVuMbKQtUNFSc8cLFuEn2iOBKOH3SQfU_0yjaR8YeZEPpUB97ZChQ_KrNUw-DGBE4SF9nEjhDsKO9tAMVjKzWjHufJyVQoCNdZC4JCEIvJ-54bUUE3We-tn1pZLYuukyv6kaCGL6eH6cD6bYF5v-zZePtT8xmP2TXNWgTUeMcwS6XcqV5GXdcvkl3ZOeastt5y5MVAAGA9veisiIru_ixmfwYnqJ3pzvUxksF1VQSF-xx8qboN2TprlcjGHX7o4fMxT4a0TrKP4sbd7rRSKluFXG8DYKNYHtzXHT4BxXiKR9ttNWmLSHEY0uLK4KgfNCXJIp_GcyDQm_8gsVIaKINL6qScc6VKWePA9wP9iTbtq_1rOcOs6KxHeq9Uqk-ReZaIV8Vsz5mJMo_kcv4mun6kIAwjeW1-xgkFng2glNJssIbam_y-cOYwv6ORpvGxuhfOiDKkYU=w996-h944-s-no?authuser=0",
            description: "Taj Mahal",
        },
        {
            name: "Varanasi",
            country: "UP, India",
            latitude: 25.3176,
            longitude: 82.9739,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNXKuCFc1N8slqJtPh1Z9q1H6pR9jfsZorSvqaFbiqSGd5s1TfjJqXk2J3hkStbmDTCKz8MZ2Yn7uu2IvIKZFOsDA2Kro8fd-xtoRlv8iTR1jU1SbepEu5PSH4ZH5c-VIRs_oFGxj8SPA1Qzxqe5lIS74TWIpbFir2Y42XUylsndvKYeqlk0S3sfV0WsueSvAyxxaeqVX252jMr7zGlQKTTeG37-L10mtvf_JOa6mdNua21Jc08AsKKnRCRFjv4uTatUVYo7Wsqmk9EB6rCCvI5-0UHLpS3i8ST5T8rK_guqJrEc0dSalRaQPZ6NvumzgNFTEq5zkQ8dbG17TjGl5uNEbXkHL0X4B_6-wyi7lna5nZazmhI73IF_IxPdEclNavoIfpY-1xsvPlhMM_sku-osdSgmw9VKdCbjjh2KRcOohbAM_wq_H737gPoe1FOjHdzaqvbcaXKoIRYgcXeft4em24iK0zxp69k_Jdm0lxuVTsh2na4rBroNnpoqYpv_gg4Oz7IAxcWNTeNItpO3K9qX94pD69XDkehylZnRM5hm1tlqUXd03myqfcmbOfNBtpYltfk_cyaFJGW8W2Uw6iYp9GLNZG4tkMJSA7QXRQYKGlBRjROgTGeNcKFpM83vpv4MUTNLD2YD3csxZrrKKDm9VktvKu1IOoHcCXdMq2aslciafmNZ9HoNQirF5Ro-nqfxt9Tn_ANFtzQ0IvOLGtGcnfl8giJDlGMiJEq55TfdfK5K2CLe3IL0SjWWCqS0Z1CtrIWJtAiaYWMuB_YEhde9u3bOcQe-27oiUIOgtDGrUjjbKRaiuK-KWxPEI6dJqa47KulCt0rIaZd1ZGEXdnMoyvZpoGna3n1ARYcizM0tpwzpiY5mXbap-tLvoW84Q89ilBd-5METZOLQh4bl9nLlzTCWic=w996-h741-s-no?authuser=0",
            description: "Ancient city on the Ganges, most holy place in India",
        },
        {
            name: "Udaipur",
            country: "UP, India",
            latitude: 24.5854,
            longitude: 73.7125,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNwtR6mD_JujDGuvHcMXxx3nqrDLF_7rd3bciziME4Rhx313VuIPicaA50tsosCwxUxWs0W4WshOp_LQjzvdXBV5DSuTZ8926yci6_K79ZaxDJCPEzhV-VyAcxu1h2xQeqUOsg9I9hsUAzRzC2n0gGNwu-BNxi9igxCAJLZ1GHK1iC66MOdl32YmwdTDnDH0848SjpTDIC9EqUolPNWi1fxbItDR9Su2MEB86_6QEdQdpBJOOORKdM1Who4pR3VmUjSPVMA-fOR45BmL63SSR2GUhp4onvsFNRZ1ejzo01uV8eN2YGZzIXfByLzom8NSbfEc_DEN8iU8aVa1AMVvOM0CHUAtlclDqAKtsuYa1nIt7hhqVnJoYEr89kxVwEfIXsJ9j3veU2iapZ0X3rpfTfU8G8n2oexEWxkk8f9JEicdSVLgFxoapJmrIKr6WcBrAv2m1kxmh59EkDyaMVWWNscQDF7J4x0HZO5DAaCoO7PUjPJ3a6NE_XKXf0jyMeuBGDT2MpSnUFQ56EjJ6c44hmQCFvqJApsHQ6Gu3NakVI8YYF43TGMq__l4B702g4WNbQlE7H5w-jCRU1-0FO_V-3h_JOj-2WJdlq_Ch0TWxhJOpGE9YjJCM99kTuodgxeQflOHOI_F1ghhVLqV29g8K-XlaWMnpt8GGnp1dc5ynihn_xKfa3txpcY1CxXHPF999OLPqBj6v6Uho9U2_xwxbE2LRfr5Ya1Rmsi6zkMJQH8KQTBC9m9Otyr4UxJd3ICV15ISGVHEQX6BwlBgFAvKhh8G0iiUdmk5nWcsLT8xDWG4vqDHpF7hKZo5EEiTO9aBs5_pkQjMVj9bx2vbIwCPeXg0yNeOKR7PEoxdNSsJDPaYHvk0WrUYqum14OUIZN1F3s=w996-h731-s-no?authuser=0",
            description: "City of Lakes with stunning palaces",
        },
        {
            name: "Jaipur",
            country: "UP, India",
            latitude: 26.9124,
            longitude: 75.7873,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPgfO1v62xqEsVAi6ZbUw2HmypICqrM_X7AqMR6yvS534I71ff8wcRQZVVQW_j8Z88khnb3ccHa2_wNxPpgaM2aZMWD1XVSY0cpLFVl6178uE0-rQ5eobJjM4eu743CGE0MezyDJ5zoZDiMEYmybwu_OIgPbqQj1CpOHShtB6wn894biwrDW5nVMoH7V94BOs-BnjpMK86uBMxTed4KtVyYTbMyNDbbgxvcHY4qtYFHoKS0PiXjLiVNmtT7s3hvvhtuGQKcbW6J4xUkY3CPxm5t6YCx8SEeko6i3Cb7M8ItAJzokA2hocyDKKjgqH8aWxQEMlS_a-_DBMDXFFIcmv1sMFeoOlCUAHZ2rjS-i92v15CDQc9jSgqbtcUNzexysJgjkT4XvJtqWirxAybNk7o6IJTCgo8hZpd_WPX_ILDUqeJa2qZHwPsEfcijpW1TEqgU0juiVh8oPBkCwolu0XmD88b8VTHOzJ_pULRtEEHJWe6tbhHE6UQnYBbuub4vuhtx1nXLcEammnzTxn5HxH_NFig51qKF0trxr_OcqQI1vkyHPjBFGU1zldliXYNiQ3c6EoXotrvL6-tCwTA3OyjguNX94YTR-AoSxndHBfWZjXU8M24vvvKjzc6cTanc-wc0W4EWrhcw1BHwoo7zhVmYwX_RGi-xSnEtglonSJlZ8KWeGU0KwdKkuam8Qfhy7WF9agj6IVO5MRchxmgz0RDjKIXZeEY-EkKjuXuG2m33ZHLXo3WRGf9Mc_FB4bSky7I2Xffl5lZCBGQWIy5U1x2HQ8lsrNk5lvAWVmYd6FVWhP8Cy0HJ0n8yK1ZNTGnYOoyL5aADk1au9o0cOkhJg_20N7wSSUx2TRlEN-k0M__5SOx6iiVBe7U3jIxFvY5v7m3xRQYKGAf7Zf9mVC5LM_1BIbcMmkI=w996-h747-s-no?authuser=0",
            description: "The Pink City with magnificent forts",
        },
        {
            name: "Hampi",
            country: "Karnataka, India",
            latitude: 15.335,
            longitude: 76.46,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNXjWpmTOgeXma9wEVkgWVHuB_ltsbM-Y1q1O1bB1_rE-xcIc0do9nOHL4v7eQnjXVF0uumxBsC336iWzsWA9_sfbn8dO0YDrRN4XQNKgQ-h-K_QVswKfFouMhSf5T2uTrYmZUgKU8OVS0uVsM3e6BMrDfXjU9FKx4D4kdsd6PRb7dsEdmU0wYqtbfitwAB175p2xYiSz9J-Osgvc1_EhbJNzCTrWAB4LZrBh9JGQPsjEaL78XS8N3rrBNvIlhRcVKoLb8Xt3jDDw9D4AV_gHyQY3AU_V75T-SHXcvz-5xRvaqxDl3ws0bDLHM8wtmc0weDNRmVXUksxawtdQyvyeF--MM-rAjrPCUW-Gssy2tfVWllSGaOAxROeigKSVF72N1uMum6wDM9jTO4WkHwCvrfy5CUvDl0kl39XnGdn2z_PaMMbQmDaxuO6zvB1NS5qyCG2FGcn5CMbmVm4WkbrSK2CXtXgf3m_AibAZ08_aahdWp53lE3G18gMCxbUaej6tZ9QyATpqIKAQL93uLqGckeJ0Dwb1Aw68ePJajDVfGRX_y82t7KT-5YEGswKch6-dNB0oplpn650f2_o7Tf2vhfx7d8H-WJK73SuDz9vcQq1a-xDJAoa7ynbj9MY-_KyKSwSfdg_tsru0sJaRTQIlDwiZZ4F1EiKFYK94_g5X9Ousa8mWcIP7A96AHKaHP1KE1FrY_rn5OP_89q8tgp39CNoQHO_i0d-GE6Img0gu0yE4Z7iPDh6zo5hRZr5QlzJIOHGaqq6_1D6d9RUxAZdGmqIxmHXng8sRhUlHIQ9Hzputq6j0V0tSQei6WbyxS_OWmtJkppeHYgrg97lwWNBXYzFTQBb8EdMvcIO8Agx3nSDIQ6o8RQ_DTGJqkunzlqHQFe=w744-h972-s-no?authuser=0",
            description:
                "Ruins of the ancient capital of the Vijayanagara Empire. 10/10 place to visit",
        },
        {
            name: "Kochi",
            country: "Kerala, India",
            latitude: 9.9312,
            longitude: 76.2673,
            image: "https://lh3.googleusercontent.com/pw/AP1GczN5t2YBj_2OBUUS-Yy4MJOaeQYpgqUKK7wtOaZsAWEbQOcaqSS0cvGtRrKGL7N-Cl26tYz8FJ6_Ua8iJoQLLUOGiUC0bGP8JgtHmUB7lSERI_L5SJHqukHMZ4PAwQbPCWL4GE_wxc_-mKVu4ks3C29m1qZ9G82KFGxY8MPyD95yAFKDCdYxctDqk-w5zb2hqfAfXW4uLVpfnZ43OJS032VuaHjaXIVYzMUKb3pvejddQvyK39pAwGP5WPPgzm3YXXafBbFpDo-QmQXquCgZMVLlBWOJXUH4XnXo4xy0tOP2USjzOTKEZxBJdF6_H64yMpZBeRXKUeYSKX-PswGUWC4geo0uQrSmYiZZgMzEaBPMz4UoIAl5InTn9RXfypVNyjqCBf3fGmcTspFoGqsFx98qSMigW64gHcme_8P7FCPIudVwPZ8ndy9F3DYrulinbxs-5MXydxmIVFvfOAPmt6wpyrBOfPKNDDHpdIjI4tM2Aboc7j4aP6wjdRHK2lyjvG7KLUUx89YouZU6KzrNwF8tzG5LJUiNa14__JNyaAE4Ye-RzLjEZ3Ju5NSTWizdenpAifD6q3MQYIAB01Lftno8jamNgA1oFay70CYvT_QzQg0u5qU6vIL7geWl-NRdce_eAqiuxDLuD1jpoUxQK4AzMyCz806JnoFcFRtI2K3Kb9fqufJ-9bfAiKIgcrYnQHawYeD73pakMFDU6FuBVifnf2SbUFVBwxm2oxhj0cmpEE_iBzgjp107JsmGkHNQrXJlYreFPMBDCP7sSWVpJdxYNgovYYSpCXGKGRXUlD2Fbtr5bRsaYG7ovT9XsjEEb6kjEL5zwHYepVX6DeQgAy0eF52gPSz--pzn4gc-B2_ph8QuWpBGFxx2ZSMUJOYQTyk6=w996-h743-s-no?authuser=0",
            description: "The best food I have ever eaten in my life",
        },

        {
            name: "Theni",
            country: "Tamil Nadu, India",
            latitude: 10.217,
            longitude: 77.7167,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOH85wCdo5Dq-RXrsIM0QM6kNhuCZGkzWUf2xad-wc9VJV1Sptqdfzu66BHcX5jcAG5_Iqv5QfensUt-VgEwYBWwy87uLPNq95_Kcr2tFaiE1RhmQI-M6B2gmossMM2p40F4SSWNy71YZ6HFzodgd6P_4_7hYO_5RC3en9B_1zhRqPppjQr0qRBV4gJZU141x6Xfh_1cVXZ5adEK2ypq8k-MtZQpr4YH_cmZj2llXSmAHMpNb9TNxA2VAqlsU3Ofj-9jFLbNwpFEOY1pZ_0kwkBDP3VZ-COj7Jydz_s4F9ZkYJhRyO5G5fdZ_yN3YbCifAvGgYxJuDhgzwXopFC8obyo2DRP2W93bExl8so3675CzmRx_JB-KSt1W7E36WiloK__s0XlFW-xTet8fpvwBOnxZmevet4bXSWpqflzYGZMtOkfwDF_MQAouEK3gpztKvSPaN-WVkUwOQII3JUYmn5EMdN5_Yc6yaWIFSrK-m8yTKTwzugd7ywhJ4PcxpETMqszrk89m5MdtKfwqOyePnctaM5Dt71mjWTg6dhH9jYyw_bdLTG4eR2XW4OawDcwwobCFX71uao32__69fMaQLTLLPa2mQn7fQFlWRfF3Olbi_Wv4ZU9KT-FphCKatHHUtadXZhBAkcMa584ba2_83OXevJ2_YH8APk6pXgbvqGo5jEa3itDUoucIr2jWtsQpDXaLWx8OFIClTxlb4RBVwKQmIsgC6736AEwuJMIclPKLXuduO_4jedGiINexU0-CLg-udYvN8hEWSo58AUyScxtS1b7UdOuIMFGc85-zIa5zjYUMmLydRQ-YhQd35qlvg8HalkA3DyIMq2whP1k0dPV8cwGoBQS6Y0qMoBlLk0f0cf0yvAAF7rxta-16Tr2OjD=w846-h972-s-no?authuser=0",
            description: "Wild Elephants",
        },
        {
            name: "Chinnakanal",
            country: "Kerala, India",
            latitude: 9.7667,
            longitude: 76.7833,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOUKZI0vY2n4V6TCfvXNZG3vpo8PQanfGlQ7YDhm3Vb26A8yk1KLGv5paM96NbPIYXANonqVTZ98S8G1lZuUUxSGt_QjHa44GxRGsNdSUugZ6_H45AvY8qt5fmjeTaZ1PZrrBvhD7Pg79iDaR3Vn4s3BohG61xnaBRKswU5P4pSGctN9mzHY_4oJyGznbgTn9Og8pu4dcSrMYauw3RdNN-eR5c8RLR3RnHXOY6oASnhH9Ep5yDC-Rw2Vt4BP1_km2gdKN-y3mIgpJOtyX0FNHW1DTKDMkY4iWT4c3XQ4jCy-sQzUSHqQOc7wJo0E2mlG8zfX3ZBQK2OeZjWbAcMXlyR5njenlJ05_4SZN2aC03WWaqvwcIePo4EAcI85m6rzadggxrTXmjBgQ5mZ1irWrFqkSmnddMJGkEcAX2j5sdYZewSkJTvoPJJY_jkCe2RQmOYQJL0yyMbCmYdSbCVrLUsKCCnZblt3wDANAwJQBVhUEu3Etf1T4jvzkccDTnUOjONdkEYZ_tPDMF_jCb8yHKtI-GXIIuzclWnv0fADWfcvrAVVHYrbw0mFGyl55fMBiowGeC6eeleJpkr8cIIED6Wc9bsNW8R5AJFTY1n0cA_JMFM3TDKv-46eIUm6j-jB9Lwgr6vMJ6rjWbIfxn5eUCFzlf6JIfcV16TEfySo3BxzRKJO6ghkDCHY2vd4jvrYWQ-aMULi1RrhqTVVji9vVtAUAeS82OftZawu4AVoCKeYUTJ3v-VFQ9nXk5XJgBAsq4n8DYw0UY5QTWvKGm_euesW4-__WLvGVJ_7ZNeY3H2BxCtqNhpRxOhuEs4hN8yV87QI6IRsgHDibBNQBlWhjmlTniDIoZwHu30YlayeUa0yp6uFTiHVgFgQ2azmZFge_c=w816-h972-s-no?authuser=0",
            description: "Nice hill station with tea gardens",
        },
        {
            name: "Munnar",
            country: "Kerala, India",
            latitude: 10.0889,
            longitude: 77.0595,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMu_GRul4CsRxNoMbkQXcNotRN_F9rZpFxDCIdG8RJOBwYuZ8aVOGoGG0iRmbPN222fltryj_DIe2faAELah7jdHaZtQ2KMzUiQ94jiuCjo8tgqgkZt80FZOlX8u-ex4y0wHB6EBgfMxUWIYNRNKH_6Mfq9JKQERipeV4JNsL7uUZZGj7ij43d0XInRIoMdYcH43NKfaJYJk40-USa__fcSN9W8y0txHgWurWwL1PKId3bfhthcSgRmyLFfAuqGN_j8xKmDVF3TF5xBwXfVZ_cdgmJMJUtZVOt3xU6tThM9OuYznHWjyCjGO2943ZEpba3sYDC3PyykC8qBgJ-o53XwT-k_rc2SH3DxEvu71WyHPEc_uepBTKONhS0U0bbOC8HdY4eCysRAi5eU_eu-oyRF6uTUbsD8lic5ubkiTni70mZiom7kWz5on4eGgzcGhTs2flUAb5kwbGQrS1JOWIl_C8XoABzXVvABBXk3OzOjE6qR7QP8IXOftsQg4s8CcyRhlmRG_xuhAcMk0INf8PAtO18Gtr2VzmQKz9kxCzLBfWLmDudrOr5XnmY2hhCeUckaonhv5bWlDLbwxF3X8_ZYLDwMfIhsK_bmHy3sgGKxp5UPnBZ2lQlUS7ipK7zowDaKEHDMH62BH4L3Tn1tlH2BjtuCr1P0Fjo8tjnJBMGDbjoLOpKLihzMMAMjZr3BXKtBK65OjpfB9Imcto8GHj1l_zLD1-g8WiUQHhn4McXe_LMYHWctrx3yR9D_qd-WK3Bk32jKIQXAHoe5G3PfItPffmCpLyD9bvcUaQIyq777j8g0RqWrvnM_fHVZ9qoc5NPaS03Vx7HwWSVLHlyEfZvYFxPKE6MQ129J9TfgFN1h_UmVA8J1jR-JpmfJwEynnYU=w877-h972-s-no?authuser=0",
            description:
                "Favourite place in india. Tea plantations, mountains, waterfalls, wild elephants",
        },
        {
            name: "Ahmedabad",
            country: "Gujarat, India",
            latitude: 23.0225,
            longitude: 72.5714,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOtsRRKYHwtC7rudVmPekdLOwPUxnWB92PX2AZV0NbAXFkOEc0gieoU2Z6sYPF-hk3AwSFA20-spgDEl9xJsB_POzzBn5vGIuQF1MTzw4EospoDFk8kvlJTdiJFkD9tAbL_lk5q8riNSYq-C0NPa-otJu0fXSsGT9jpfpTt9iFOcM-VEfTLQfqINTg1ZOL_p97Lun6i8I4OB4cEqbo4c2rJZ7qokH1d4SloS8ODNRG35OCkaGj3Nkbi_LnDLLIcfqRO9Q0RuXbD0i9-PJV53HaIxkFJqpkKK0fTLIXVCggwOnMP5KwtfqzdhYfN81rLJtLRBtL55gGn4mmXjLPpu0Rx0Z0sOkdstzxK8L95S8jCt6DsZLyCJUR_hSQ4ToeJj8qsUbynCW9sfLQZHYiRdYGb55pifESJyMzLvSspoqrp9ZauLwynhMuloPgYcJF0_tYf6Piy9eQw800euYgfr2TkaAqxyGE2gszYSwgzUvhWICqkHDOD7h0RiZTKN1Ouf2HMEg5MhxZtWkpzivVbTqH6RgLYFI9gOVeJRoDOVjmz2Hl1N3etUlk4tvGxVdsemg04GbtJSFrG0X1hrcho10-_anZw6oncPUFTZNrMvT_JuBQN6ve3alrVJNnPJunqh98qjX-qXG2sKxD8cfQB0zRsxNynKO5T1j0Dmzhrr5FD5E90THrwpqmoESGr9pxtSkNkp8x_CGA_E5TF5f8XyVA_Trq8IdoA7TahPZ2JiJTzUNgQ8z4-D6a6SJJxha7HsTkGVQr_AuySaw9EOFI4tMMVQ__9kC5vuRjYClbnOYdxupM5K_9mNv4sKO3ad1RtRRvdBfE_2xgOpfu2mE3gr21OMWdrGav4Ff4HgOjIV2y5ZIgpnKuIxyAa6aB866tAra7q=w996-h654-s-no?authuser=0",
            description: "Gandhi",
        },
        {
            name: "Mumbai",
            country: "Maharastra, India",
            latitude: 19.076,
            longitude: 72.8777,
            image: "https://lh3.googleusercontent.com/pw/AP1GczN9eHDc4Chqwruj4ftTK6OBM6k0bHYWJoStoqVN06y2sJzgkhuOH23Qy4JISAlRzI49NVZHCdtGNZG-EyyXTHkh673xo1ozHY_D1w3-8koZQ1UEB2uqBgcjOdGPRfRs9mol3N1FVOGZcWDaLo_9dUCcGDkm7Kf8mWbabSoMyYRfXbUFzbbv2KFuGvTvhIXbUgsVTxHWLe2ClSBfgPCtsuvRhYgwM1JKlEMjnnYogu6SwSX0GGTZw-zEhYF8Iea1T_u6fACW9sJoJyklJ6-QAxNQxvCx3Zl81MxWcR-3LRgFGbx3-23f91ykHr3aFeywEZe5-DQWRkVzTDY7BJSrsg79Uo3oBjYCUgraSFUYWLUzAI4fRd5WrPMwsdTvJlpXwfOQAbVAVFYZwFHCxQ7-STAOzOcwoTUcNpYvvHPtJUFuIcGFgp6KJ5B938LGPFBPvo857F4G98D-p-CHErspV6_5Ll4glsP4spuAG3JBuZawKmSV5B80l3Dk_NzsVC9hkIHI2LSV0JT_nbDjv-f5cwBOXdOqIo2pM4jSTdi-6yLyPdkibylfr7ASqHM37PCl8ADmPRoSbHwsCwidqNewn0UFuhixVNMa-cCdMHyctL37We5Kebpn32SR8p7xjYIAh4t1aR9WHKGGsA0MfyqtsULE20sgpVZwzMdCUfJHUO63uJShflnA4fg34dtGQ_lmPA09mUO7kN2vPOkF277GQlRWOBx_hH39ETH342oVgujvmij8Mrn6ywSUYtl1Y6L7XKQg8XibwR__v-GS8q0zL2NYtatDJ3b3LE9BznYLgGUXz-aO7afR-X60yXV8BJWjU4_vW60xmSTTywf8PpWUpcDqpJE7FwZri1zSOz2Q9TKIh15Oek2RCLagQRADS1VMX6c=w996-h752-s-no?authuser=0",
            // description: "Financial capital and Bollywood hub",
        },
        {
            name: "Chandigarh",
            country: "Punjab, India",
            latitude: 30.7333,
            longitude: 76.7794,
            // description: "Planned city with modern architecture",
        },
        {
            name: "Kasol",
            country: "Himachal Pradesh, India",
            latitude: 32.0,
            longitude: 77.1833,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNiV11XT75awpH1BmGbdBFOBSymtN5jXfabQSvB8Ij9VvSTM6JEBXmEY6HQEuzsK8z3ENRJvx3QQsSBRPmK7l9cUTnDA7r2t00ZpWolKYjNM4C-jwQ4gpqECAal_LG9v53UP9CmflJoJuoiDSv5RfalgxYe_SfY-VcXgp4cEc7zy9XyvfmgiO11dDfBrLAIX4alKQr1PncwyTbKvWx9SL0f0dUrTC4GEfNIGBHtNe3bLFwG6PJh8Roo7birN-6uKdmk9UhujxHRlKPVzNBmtvGoysRK4XHc137HV598JRaVUtn5nHVGGlTKCi5DI2KD6ACDZ75xOQ-ivPH-ToF81IUl9c6t9cbT5QLojCpoLYsBBFA1H19UDGV8aa5tz67abGEpVyejmx4NclJHKwrsv6wcDhPPb52_836aGtRPSDO5zQ45dsNPYO8XDjiSfvxFydwmDOuddEl6VprF1e3DDCrlB8I4g2RlKLW1gIZRCn4gV41dVQOAzaFlEeLEFTwSNgIkEmtEogKVwN_vTLCKofxrOvE0428VDOMpxutEux-InueITOu9fPO4oE2KVyFg3rDIxcKDc5SwEi3UW25pbUjisAaDoV5gy2dDrR8-vyucFe79q6R7i8BmnMUPUF5yFP_SnRZVL5mz2P3AMDQ2LTlrfiKXcescu_R_wGkc8s_ptop2WaXgNQwcxwBeSUwAmD2GxqP6BxHm2fxhRIU0uf1Qe8HRRpjHNMrlf07l23g8bdm0h8Ex85zqDETxzz2ciwN5rlbOZHdM49iAi2VPAiufnbIgJ38ZLCDXcW27D6_eizSgPqpLCC3ptGLGwOLXnuVTPsv93k88BW4Gb28g7-3YBW48fzIB5au_ZHLNMfbo0_NMqnpdsSf1x-pxJsPonZjipalvBJ7uVolDy-VF_Va6jowontU=w996-h747-s-no?authuser=0",
            description: "Himalayan village known for trekking and nature",
        },
        {
            name: "Manali",
            country: "Himachal Pradesh, India",
            latitude: 32.2396,
            longitude: 77.1887,
            image: "https://lh3.googleusercontent.com/pw/AP1GczN-b979s3I4JgvVqWQpIyrDFre3_17mhZtew7lpJpHWL11bWxEvxCCUfwZ5B3rJvNMhOKQwIIi1nGEq0wx1rfZOPeVd7qF--OA9Ehkr0ty9eVMhqtHiX30fD3aA0IfRD5nLCWYpNkai1RqjzDAd85M3KNx0ttWLHalYLIV3fLcaijmGYoIdyAMD54UFRFrwv-Vm2c9EhAButZugzuO4hXz0fcfa5GPUVUAqZalpvNA6PXqBdiJDn7rnRFQkLmm3KCS5Z9RgqaTkEWhRDKUA7Xc5n_eEMGmg0QMUxHr3I9B1pLdyi022nnsgycpBYH4psnhcrjN1hS_FszHXAVFTcPWAE4XlPJFQnlGzwEUfO9zA_ulXTZAoAI2VDkz2-Rmjv1CeA72FdvtdyXZP44RNUph4ckCH347EU8TlW9PPea3TmgOuQr7ETv424yvW1q3gyXCsfn0jkEi1owMuus_PhbWxvOGoV8mMOiDoggkmmhDQStVCkG7B9rKfJ9hT_SwGyY5gJObwkKveVFudqqxIaHRtcHc-F___fRsYD1VWtxtLBjYayZKLzIrsAPtn-j0Ij2P7CDq2UTpDGS_KpVflVYw9ok5Uaqf-P55LDCG6NfKClClVWPE6YjRH-5wEqmPR2JNoCfPWMZ6CYcFUSsJ8YKdD8YeBdSpuxYTD8x9rR3snI-tW9xs-sz7DFL7V2Zz2I1eeKk1IESLp46NXVUxhKDQZaNss3zaCAd2S8y5loug0s48n8tOEchQG-aRFlKMhMyCIxKLpRjWxdVCbJjaWLu-mQa3_yBdA6BRDQXcNbAvsLWjCsheZsB3RMYAMNVcUzKXViLlZfi4jQBrNl8_5WT-ypccOKAxI3D_4FfRinWSMfU5OG6klY836VjP0yv1dGI0=w818-h972-s-no?authuser=0",
        },
        {
            name: "Spiti Valley",
            country: "Himachal Pradesh, India",
            latitude: 32.1153,
            longitude: 78.208,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOsNpcOtoLcNjmP8900Un0Q-rRqUg77M9BGnofuSB7hus2YTlptJcDIZbP7sZJNu9djaa2nHaZQwN5h5gfdQyjX_MzoJLqj8aYBTOsiNFX8w41S0zupanw19sXiB9i4giYIkE_cr5FOnvhr75aI3-AlFKWq0M0KtiYW5NntE8NBBjZYq2qmP59TuivJg3w1RzajSKj8VqZ0G0GV0dsiyxTgkFXYuHQ_jBaklpQaFN4qPMmyCRcCUZcCH25APvcsMCUFi1dNb8aEH-jMC0JdRdhskjtJrCoFnkX93MKt81eKFOuZ9frRlfqAsnRgqkKwOeWOJtxppwXnyxXjSxWCRQK6BubNYmtqpMkaIAjHybsh3tSn7vo-syinx2NZAZKvHdaWZAdV1rynLsrBij6j_FzSacJWqPoKbs6WFLRTondjcVIae4XklrFD5-8tr37QF-asPzYAKxegEL3JkU3mRA8d-X3Df6h4J964BUztLsJj7RUIkuw2krfJWExlBwr_tZ9SeGrUMoo0dn8PeDdDERa18WFro4hGF0Rn70nhWPvCcOw9DcIUpMo0r0P8lgJV2smKEKjg7DoDUcar7Iu2zFThA1alJxL7XWtASFS6BoU6fjY7UpY6k5VBUrH-pUcqw78U9R4aVwB0UVFjr4bVTPk90v4een5qnbQE1hGRUPU_BNvvrb728ML-rAj7_8xXuIG3YyVHS3n8GbBhvja-ybUZT914XGTvVbmzYATPk0K9Uy9ZzVAG4FEUh7T3R4y5NFu2xm1qWJ_iLez9Ck8H3kxAhCPg52freFZm1AVBj3ZJQxTJhI5Yjg-58m477SyPsze6kSjzTshDbrbRZUukth-dKGSeUNPXcGMCplqIzxPuzE9_AdN-7-LSrAmKtVk0N9GK=w996-h742-s-no?authuser=0",
            description: "Remote Himalayan valley with stunning landscapes",
        },
        {
            name: "Alappuzha",
            country: "India",
            latitude: 9.4981,
            longitude: 76.3388,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNGB1EafDOi5SSQdxBTHwh-XoGlWPyIGfudXhH6uhKKUVHvVe8dVR_z1Jzmg0rVlt01tLJBJ1GJ3waCKt-WPuRD5ZMM1HgvQDVRJ89W5ifki71IcZZajG16bDUkuvnirFWhgLYeAWQtauKEj0DlO5C5_8zJDC-iTjqE8chXO20xSEH9RxgWP5xABMWTWK4A2DNRFmmWWyZ6PN9zmhpFIjzerHWsNLgDx66npoN620RMK_3AIXJLtMaC2RoCmfTrhJfMULm5tKz2dw1miBOqSDFwuejp-PfsHRoat_tH1jTy9ZjzzL_0HxUJ2BF1fmf0UJH3rwXGAXZHWLZHkjQ3Yzfzg1PfikZqOozEVyUP4J5wNouJt7oa4uwA-n7p2629nTlWDhntrzo55LBR1_ERcGIwc-vosd0x1ljU0zzO8GQFPtlm4-jA4_aBHMMLnHOJsdx965RAGdIYNhGl3I4h8PsUXFeqIo0Mz2RQantjzzHku8MmXA-ZqtQBOt0To6-EfNz5oHXWN6ps_haEvg4aAL4zrWrQqwgHmudF22ujqfuOruh1VUgLwebi2BLfjpxqnrltQkS1VhMw7qEwhBxUgWad49BXPxAp_NVPveSHZJOaNbK53kdI0OiR_jcT2wLR5xtamDuvP0mSWYKRM7uTbNXnJGi9fih7Re_fTXpMPxL0HK94_CTIiVQpS602VpuJV1vCOE7FyBvvdJEDcXu9tO4bjevcXUA-u7aEkEIJOCFrjChUnNldnvLykDsAJAMzhNVr_wG1y2At7PeAL47TzvSqfjvqKZrVHyLbUfs8a6O6MoEYx8ybvicRCM6LkRsxT_36Mf0o1_Wu2Q7dJIVWsd8jGIFyZXNSkyxwvVUThri1TGJr7VNBSu6wvlBPLEX7b8yv=w902-h972-s-no?authuser=0",
            description: "Backwaters and houseboat rides in Kerala",
        },

        // China
        {
            name: "Xi'an",
            country: "China",
            latitude: 34.3853,
            longitude: 109.2784,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMSnOY2e-CjMen8mZmSypRuRLXVvEaBGq4V6y86_uJTEuUT_hf-ja3Bf-1eNNr8jV43laC0lMPy_0JzwVDBXObTffja40zzCDiOeUVgy9kGb2JFKYVqfVy-cPmSopQggJ_sa0yZkykWoptxxAAUAxiIaxFSDqf4T2NwEIeCbtq4p9ixvVGT8njLWA0d4DIwIGsBjKFLLuH7PmCBFwPK3dIArUVFPQJkbSb-SWid9tVz4A_N-wCi2eOqX13lbXOJIauAlKXOd91MWkGypB6Vzm9C033XIpq4tS_oNwA2AJrvTkZCFnOJ-Sr7yDos-Vs9wkqV400s56_3-cycTY9KbDNHSEIJYh1BR96C0HDh2HD_ofvM6iCP61Hx88mxPZGTCNn6H3nMUDq6M3Yh8mBk_ESYhrzq5bezDbLlGWKYu4A2JRft3ZsmEz5HaEkDsi0l8aIfbLb2qkRK7Q1NWDNdOAKP0-8EBr3FfotpRG5MQSkrPo5zqVWKfE3FXJXcarpy3VorYNhqyLE0hXMbsi9ePtncdYOso8OCSlK6IYrZjQYRtulcG72M66VeBM1ZrWMbNQfykz8nPI41HsDjh6_yA5L_B3UVxzpN9r8WOSkk6nD5FkyRWAxQPRWFk9xvysYd_nLYtBaLDthuLQd2lMC7XxPylOEKQsDZ4qy8rXGHQmmkf-jwRi8G-l3bAQxRxrJo0TCpDRGVHwv42nrwkE996uMbe0PVYjKuO4L7XvqoVWPhkEVa-6NGIf6mJsVsWUpQYeWp09l11zV0Ff5uDmhSf6h-9Tjq12Bqax9Tj63h8dTZ2NXEMXibcVtROb_IklPMZLWAxLIucQMk5QqHHaHLFJdbFgKml8ENqVZnZTsIn3Vfs1wHQ6AVea0Ihrq-gWbHydg=w996-h736-s-no?authuser=0",
            description: "Terracotta Warriors",
        },

        // Thailand
        {
            name: "Chiang Mai",
            country: "Thailand",
            latitude: 18.7883,
            longitude: 98.9853,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPNPNzqnlsloEsnMC6kj2spaIRyPKrShlDbzn3eG0fA63bGwqB4AWiM5gRxsDLb9TR966j1oMdZZ7sDP_oJDZl90CnF7m4hMD3mGvVileBhGEfZyiJT1d0q25vJiXQMVDjhM15I_E286ecC3UF3QAVIGYuzzFRTVIOfQKIYUxmXHz8QOU-UXGwfcv_5dasOf7U3TpekIN1WbkuWQK-ZEkN_6aRKOzRjdWBB839ITsX6moi-yecucrOwyX_pmdKTMULNUfs6iJFecMt-AFuAB-hiaaKPDt6F5ZKg130k3kvBfqN1YNfwyb24ZOJJLKjJdcUxQrBsnUoGjP1N39xHzEpOKg4DYL3r52BNPqfGJVtdVu8PGDvbb4WusJpUf_fi0YqJxVbKWEIzr4SBDfHmTKKafKFEmMV2oxttIy-AaD8AteSx3LPIQ6y7Q0w2s7zRbO19LEShadZkjFV7mEiWlh-OgutkMx6pBktfOSnFiLYrQXwhwH6-rjDcnlDyNsQpAArqh0BJoRtTHgFxbE_IuZ2wPRNbOtYRlFnpZJqGs4H12XsL97v0Pi_LHv9-IJSG2JQDCQUi1DDVSeqMkiCLsIU_-Wwg6ocw-jswhCtiUbWVgdFmhwRBGZ0dTLBBFzhv0E8pNieriAtFKvHjnJn2cBRm4fADX-PuAjj3AoAae1K-gvQu7e0aGvAXCfyc0xCQfuJUZ87O9cIeF5r2T6C3NuIJ6DZub_CDMYqK0SQNOIhYJADZEDHXVsg4CoFwAWq_jfv4zzHegU4f19M_DkhWKDCFDwpxtm5F2J0icStOyAjK84hRoeTZ75WOOavBVRyEwQQ9GHJ-8TBi6SOlAlmehj2Qmm4Xo9zLQQd3zJt08PS_2A8D39TBN-xrRVv9UbubgCfg=w877-h972-s-no?authuser=0",
            description:
                "Cultural capital in the mountains of the north of thailand",
        },
        {
            name: "Bangkok",
            country: "Thailand",
            latitude: 13.7563,
            longitude: 100.5018,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNUU8SOPxJhGA9hEjauXsa8w67CH6c7ADQnCDF6uKusRdsvlkISuZ8VNaWg7KZpLSmoYjGsGl60RI1D9ekBofOsQGzo9Ss6aSCbNiilRBZ1NDVNvx31Iaff4m2P0CTpxeeVS4YmqZN3AqopgAhwcHIH1EZ_iHF5PB3Rlh5StuMEkiJOy5fJc5I5AAsAaAt-bddOe81N9Ku2PKmVB4e5MUDToRdWBhKUBNaylkuVBCfaauCT5Ya65ZH8ZXnTowmPLE8Fa2NNMqlJCskZkBF46e8-W9gv55zr7VYV1o1CiM7aKdzlDc_zTKGt1MvYhKgsAN-MjqrX0Ga7TRO43kwanvduBFGFFNhyvceDJKLrAQnjWa3sDVy0BfaUErhfAJb3o1tRUY4P0H_fsNU7GAuk16aJ6CqUfK_wUQnd-zz3D1G2hiH5C3RPIgR7COLtrheBJDgBLTguTqO7_VUDlrutLu0qEFoRHS11cxWtvV6rB0tywtcfVCA0m19lqTLCjf_r6pWGtLyVc9KFfPuHugLDzy5Goj3DsWpPEbXpQRdN6RlVvpMpKD-JkgwLXzETIel_ETfh1xBNMNwBUDDogf6RD_I6PZMC7EMuelZJeOtoiarhk05UTtuKVAziQwubA-MKWs2OiwukskV4XaBV97-kJ8isC5zZ_9zUHztWNYhaxlczEntmIXiUWk_aLTHv9iTG-66Ec1ga5gAB6uFhI-NLdhj7LGLTok6pQEdb8JHZm35CZQ9bAEyBTKE2B2ksWbbuln1KoGySYwoECEFNxODVF13pKDFYiv5VINFqo84z3dsxZy2gYexb-LvZqH3DfvuJnxevzJPoDhaLi7vYjUat6j9mH5MGrb464Wvp7ertOCUPrjxbm-kza8QoDABRIlSRLjw=w868-h972-s-no?authuser=0", // description: "Vibrant capital with street food and temples",
        },

        // Cambodia
        {
            name: "Angkor Wat",
            country: "Cambodia",
            latitude: 13.4125,
            longitude: 103.8669,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPm_-UYYKnp5UnMeKTd0pkkewC5tP1dtTjnFC9S5bKg6X6z80_QktUyVmP9oONRnhrhLc-8HH1zCCMHKh-G5cJE1-GfGjiQVnd_aEcZ-Vw88Td-F_Z796uPwT-DNG1VVmFmprvK2D2X602hQdEQn0T-VVnwNLJvCxWRoA7lVA0VHB-1HX3zh7rDAV23pkaF15jQ5ZpJzsdbcLPWwO_2EdI0SysQZYkblqMndaWjC5vYxYIqLDtk_XBWPAMBmo2pCw8szq7NR3BDlttxtL_ja364pNUPg9lmB6wOSTBpxUF6fO9_rHz9eDHGEis73DpcdFbXycBwOnkW82r7Nre8JYa9NPsoCZm5CgfgQzmC5VFlATMviX1GyEXx8LLOVO3n34OseAetWxS7TJU8Cpn59_o8GiAnfkYFyLsZZFANLBiWGQ-kV9dRhh5syueNnLHobffmchguAs2w47EI_hLb0AjKUgIVDS2oHQmc7YvaCh4xwKrncv6SZzlnkf9ckJcWiCqd-S4RXAtaT3LTXGjTjUcRGAT46bqsHAIp_8cL6rzIioOaT-JtPTFXuwGkGvhHGgBgJWAEoMOhz_w4alY4201uYAeX0e5rW7cXhIcE9t0qG585XPsRw9InKyOdVhuv-ez5GUdHvTInkn4_u9Ol3fH0L-otlRnWh4i6qX6HRBvC3Ts72hBJmBEvUHv5LtOjtaPOu7-SJVgoZCANHZDRkGxDn9pQwYUCzPCzKabc2Xe_D8DP9fP-iOlyCy6q2YUeLQpq1aG1PyZWp7B56Pzqh1o683Xern8Nsbczs6tndBilNtNxucSFLR8Y8ofe7wBDF_llyhF9ToK2sFgWkRSpgCOrT3zQiqXvc81CPhPwFk9P9-S1N3XlmNQmJmS03fhkUQI8=w996-h721-s-no?authuser=0",
            description: "Insane temple complex, the biggest in the world",
        },

        // Malaysia
        {
            name: "Melaka",
            country: "Malaysia",
            latitude: 2.1896,
            longitude: 102.2501,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMfhNqd_3-N05zx80GuA_FNsdhWSFzn3rpWNyQOq7wlyMnWs2C-jtD7X97uIzHuiy0teTsf14NEywUebnIwr8bxaUauuQ64AC2gnAPoMxRztTvZpuCzVpiEJV0xGgILRR3-eepKLjLOxJpp0KOr-CZBFX2M0H72DbK3L5o7WFnGAzJ6kPZnRyDQHJVvw_YOZWdoEWyZe8i0vW-bfwvQDCcxVM3H6TZ91kfJKKA0YXIQ9Gf8MfQv98XSVaRcU9dh5X334sGt9Oe099L1WFuZUusHnOSU6eZkZLh1UrdYTp4zp1fxn-lm3aSW4jKkHITzdYIHz4DT1RroX3jjrlW5XZPR_Y82EYnLV0LeDtKFRKI3oGJS14KuZDvkJo7JO-QYqNab_V0VICAu6NzKeNRZTaN3Ua4qi52OyEpj_-aTybh7rID5znEZWLczJuxs4avV8-jJIiT6Oa80rVIHF6nokWghg9kSGtty0yjvEa1G0Cxk0vD3Sv2QFscaoBPv5n62lw6QtTE13i0D6Cm4uSzViwxbnc_zIuJklPB3eg8xxmlPJN9pi1FJlvvJDweM-9rbjaG-RQVH_mDNHjD9v_tUMrUVIAprMqmE2XglRx4_VC855B_PTHaoVk-nlXrRMxYukcavzOQdqtVz3_FRHLQBcmZ69B0bqNLtviso3FDckE90XsNxaFVKaRXzOds_6vDeiWh3tRgX7GUCNuO_ADbdcbvAqgVU0-tCJkCDSfhrBcAauOg8yLWU1_HpLFLhbDtdhiEzOxjovbOcULlO1E57CoCHGtd8PmhPP6Io4njHHityFnK7381S1UxSi57dqVkE0PeoaKIwB-yCVujJb2Ff3hgmJqOV1lplQSkOCjw5fd_L4k26Fsc8nSTbXh1V-1VS0Tc=w790-h972-s-no?authuser=0",
            description: "Nice port city on the Malacca Strait",
        },

        // Vietnam
        {
            name: "Chau Ðoc",
            country: "Vietnam",
            latitude: 10.7008,
            longitude: 105.1119,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPUTXlHUDok9sSrRWhAXglbkfFPzn2aXM2p0z7V_9Hh_HORJsYGlHFA4CVvgbQy7vUSRQRX_b5twbqfLYc2l30wQx1uflzY-WS97DXy9xyK49GFKnaXfd6VmvIp5OpGs643JxVrpOlY_GmBDdaTadeGb4qCpXo82DdheiIXDMdnIVIIYSJ7regKqyUW8CoVp9k9dFn29787yn7MoxzaED6icSDn8p2J6odAZYLZatTuIz8JF_QYpAimUWLN8-Lz1Y4XjTFyo2H741YR08st9eSL_hi8y6WaAg2BJz0FjTIkM9Dpgu89q6ECRWxfsuOd5M_wQvlw0JieirOBEBA-1ttkeF8FM8TEzxdL8gf77K2AoecIYS4jlL4XcfvBT1AxBr39YSoJaOVlHlCclKyC1_INRQarlxPKOlZyiatglWKRXgwJnkXbMm1RZNi-EeN1rwT_cpBrb236RLG1g3CimnoMPcMahvggummqiFF2vETMpaEakidRZLS7HffhtT2JvYbVeWBVq-0HmnwGT9Ro7JlA--czCMiRuBkomQrL1eGmuiA4wcb-kUXqjHmJKMiWDJam1YUAtze_udQiKMPVImzksiHFB5c3iK8W6hsnuOfefV6zUOarw6zmzYhHvGMuz_D7j2hb87Z6Msd4hmG9GtvHSBwgCxykgcF3DCLgq3dZlu_kzjKJNpflnOE97dMztGt4Vt-xTHaXfauYecTLwNrCgOY7dVDSZwgeidfHPKHfluYWbcHtVx5Zp-e625LPLE9wughujV4cpKsf7dcna-DtHXzHAZvkjxZuUDo69ZQu7o_MpFov6xiVW7OYOcbqftijzRam5mW8n-S53FdiAAZbptC8W08lGu-CCcNZK8Fp0NLkSElbp8coha4LgNLtC9xF=w816-h972-s-no?authuser=0",
            description: "Mekong Delta town near Cambodia border",
        },
        {
            name: "Cu Chi Tunnels",
            country: "Vietnam",
            latitude: 10.8231,
            longitude: 106.6297,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMh8WdP0uxcCYnv1AqEdzc1sVdoj9u-3YhxkqYIsRDnrTNp4R4OvSAHoR4ncPpRKpAbpyfheA2Ra7A3ZfE8EwnlL7OE3-dz37sLfiUToJb6L5bs--Iph_8Yk_bq77xHV02oI06AvSpmEwQ7wtxIn4oficp8DRvjeChQo9hbyx9-5qAwaz8KCmz_8QPqLn7JhJndGaTZiIXGp3Xy2YjOhElcpa708cywBpXef94pvcB1vw3DRN3SIqmF_0uaAaQ-xyMb2TfTNbb-IW79NNhkubXCxJl8Qr3mpSeUhN2pu_Sxpf3eyKXsIjJDKC5qV7Ggk9guPr_XpF_96Q1iPxvO1u4T8sP6Cn60AqByLWdSEhaLatv4dwEk9zstYJZP8zNSZVySnK6EE4m7kLIJltgzhTydFhEbYrbv54AMe2R7s_ZaWg9emd-HJLEHj4-nqk1A8ERzZ1oMeTrADbgNQywElk-OvdAKVjud98bZPWwK29M9cNXYmIHKCd2Vit1eavH0XSgzjYTVN4iVg4lwRjrbnlesvRNNaR0zqgMgL5Yrpugg206_eX-nQhdL7q3n_zJDgnASDtKVodHbswHVWROlB4njD7TZ5FP9dRKmfHrpjFvcGXKiCkZA_Hv70ExcdGOkBEWQDXHfVjtVQyfm_5G6OsY51EgkBxE3MBj10T_YHCATunTf4Hj5Hl6EzTNjR7Wsfw663v-okDGsoBmgpu0osnf3GauIpRCH7l7LpQtrbfCNmiR76y2qcckX3ne9vlJssYEa89LSEZmNv0Hrz_7P2RLsKr-0pRWDQ5J804mn1ImBCj_Pp4P8LpCsR9v2uO1G8HvGf1HmIOKgaGjuoW5k3M0goXruF5dCrPu9OaikbpLk_fQLERbWbjiSHBptTj3odbte=w750-h972-s-no?authuser=0",
            description: "Underground tunnels used during the Vietnam War",
        },
        {
            name: "Ben Tre",
            country: "Vietnam",
            latitude: 10.2431,
            longitude: 106.3757,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMCr7hcJ-eH7f5wRrxuiST4fHKb0No-AUsRRrpCZnCyP4bKaWVvwQwBb_RqtNNfVtOftlhYLoOZUpgRKozUZiomh5ampu5uJQMdtu6_Xu0OqQFhjpDrrOxAhLISvVsOiSXp5DWR-wrKObjoYqkdpzrGIevzf_psMy7jjw5cpsoMwuG4iG1DWug_-CALrJwKzECsEDAr1cSn1Pi4epqugfhProy6-ZC-JSzyRWt1k_gf-0uRaKt-80s6qN_UeqcRKkkM3Xhe5S-RU1JHmCj8WoA9pFGenE-_U3984yFBTfnjn6CoML1t3PhZuYPnuh6VTNwLASKOT_F2oQhTku_uja3zgTGu2PcDY1QK60P4QvNEi-n88rfP91yeqMIrFHzp_UZHx5rwiuNnye2o4BoR7Ok0jOi4ZmDvHOjHYHwGhoe9OXmvY1pQtf8lf6BN-wiKxqGFSgBiOtR-QXGqd0Wgk2FgWEnGc73yWw6hmQBWr44xcrIdNuBCCulLft1C7728gejQ-sJxAqNcvV_CmZgc6aL758SSi7-tJ0OPYvJkDMjUsngP19Ai_UBzfVscUS9MatDfkjUtG_DFFmmgRGGW3xIQlWtvVJ4NpFWITtYyc-x1sF2J9xUHz5NDGySwCnBlCPTDY6fIcncRn2MkXs0kOZ85HmFl0SyHchWA-Ck62FCvCWuF8AZONUsC3uVXvlvyBCmZmgsYGwUiMwEAT06AVE-bwN1EEhjmIR8nEUV9_jEcbhEaZgX58TY1SefQkirZQEtrrKLwXN7HS_wedraNr3hdGhUfKjJPfS29r4LS4nCGaXUSL3kI7gnD_JdT1KZnM8R8j7ML063tG3XOggT3AeA6NWN9WrYuQdY0oJasaIpAxoY8wE6Ul77wav8up5w8kBM=w754-h972-s-no?authuser=0",
            description: "Island in the Mekong Delta",
        },

        // USA
        {
            name: "Newport",
            country: "Rhode Island, USA",
            latitude: 41.4901,
            longitude: -71.3128,
            image: "https://lh3.googleusercontent.com/pw/AP1GczN3olyJuDudr0RA0_z0OjeUD1cKmaxv5Las5jY-1vnAVpmJSuT5lRBLVOn6AoQiLfzuaUF7D95bQLraQOECjVkE9dG2uHjrmaC8YNUSBvlyfVTLiWPpNmhzCvpD_2ilBvMZEUr0tcrghaSvo2x04WOi3Nxb54KF3HN9xLo7CEFSykKaeCeEqGL_RnYcMmbrwt4zk6lpxKTyHVuNvn30gc9gbKAapxwEU9Li21Tuc0z8Ixo1nqRj4dXZWejXGO7-xaG9dlMP8YK2ISKCiw0i2KyBqShdUKHDWEBPLs0Pb7aGYPpaumPsg6iwpF_2YjlEiwqhqWaW3jRouqLelLZK6ZwSEZuBQOrc5vveYCsACKq-S-sL0ni5UtlMZJ4XNC-rDo_hhDflLXOpgRwO8np48FOoMQYkXVHHk0UqpRGUw1RTEtwMI23D6QAXlSgTlnFI1U4De5uUp_RehJhAUW-GJnmGBXKK-6Wm4nXyuD9PviJYIpYfrf3FhfjsNljRPWWXGtnGZ1LLMDpEqW_7VVuiNrszK7ki6MhF_ZFSkU0W5cz5ttm0BK9yXtcSXAO_O9BiCT0M0elpudkoVItALfaq8AMOb0C7gNdVBvPh-TcAZ9l-0B4KDAmTbRUHPQ2Q38AciYmeZQggYd2MYPceXrhXQLnEquix_VJ4UgTX3h6q-uMbSXQizuw5WqQaboJFmUn96gOuvogiKLUZvvt63oKHimSua4_ZXNUAJbU0DfhT2DHP6jFBiMJosDyeXoab-q-txQx645cTnlqPgVqevyhn6RUQD5FnTCKCmPdXFy0sqTuP7q92VHIg-UpHfuvEbR5BG3NSmzzy0LnMpXPDSUcdxomsiKtIEcfYvkLI06rOFN7XLmkw7xzi89BvwUMRX1qUNJpP9VG2qP-AkM5A6hVX8GUVuuXg4HQ=w996-h747-s-no?authuser=0",
            description: "Historic coastal city with mansions",
        },
        {
            name: "Savannah",
            country: "Georgia, USA",
            latitude: 32.0835,
            longitude: -81.0998,
            image: "https://lh3.googleusercontent.com/pw/AP1GczM8Y54YtoPvjcJ2u9lsc6cId8M8LxxlJohAmuyMiX6HyAFbD2V8u87sOiCdbVedAO01R43P0Ki_T9gkTfUgxHMDf95Hfalfjjr5sO47MZ9xcrZaU-smJrCND18TE2vrTXgM22gSlmu45sT8MaKMLnb_cJ3UQ8Z-gXA8WT5jnzX8asuTtCPEkkn5webafco_1Kmpz89KjYYhle8zntOyeQRawHdTiv7sQLi2-yzvP179va6GMV2D4nR8ZX4ecRqWXp6MCSS3yLEEh8qG1CpvHejQ1l5T3FZE8zYr4RI8_FnNA7i3s-dIndol6cafckMNyHAyZASpL_9DzDiYAVE66Fhf2PtQh7oLviOIfIdYV3NSNmZpPrQ6HJRuWEYPI-7neUfDlo2g70pZgHDv7rSIKhCqqi-mRB7DuMnzezB8fxs1XdnUoKXjIYxYgQRxGyEhkbaLJAoVZDJg8jLtfIIpJVeNHjSg_5V9pmEJUnVf8CqwgbVQBm2evQ--ewlWjHbo7a3P4aWPLGY7mcWwa6xQkIUOwtJ52LXVprum7ar19I962pTOr6-jGiLinglV30JnTp_N0_-_wptjkfWkb2jlG50Acd29kl4nQvwgiSwWDj2YiEczGl9zPq84kH486rx4LV2kS0iUf3OWn2_NWbD2nar6FeIpfLrzKZAlYDjBv2syJVfZytsmZneQyUYHLwePqJwd8QG5RjMmn5OdzFc3BsMC9Nvk8xqFJLaSQr32ALyJivD-UDWPhX2PdURrvmUKrSn9iCqNmR2FDd7qgo1wCcQrQZzVlQsWjt5IzvV7Ra5p6T0xvh1iBVsQqLLlRl-oJf4aOENMj27qcne3go64RYsXgoogbRfmNHNR5FAldg8tQ30vU_ozVR1U8LMx0_e1-6MFeYJ_sxVzQxez6ISsLTlJIChByQ=w729-h972-s-no?authuser=0",
            description: "Historic Southern charm and architecture",
        },
        {
            name: "Charleston",
            country: "South Carolina, USA",
            latitude: 32.7765,
            longitude: -79.9311,
            image: "https://afar.brightspotcdn.com/dims4/default/3253556/2147483647/strip/true/crop/2400x1200+0+300/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F60%2F75%2F66c61cf9460aa7daa8a1a32de4c5%2Fleonel-heisenberg-126f-xh3soo-unsplash-1.jpg",
            // description: "Antebellum architecture and coastal beauty",
        },

        // Morocco
        {
            name: "Marrakech",
            country: "Morocco",
            latitude: 31.6295,
            longitude: -7.9811,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNZzWtE06ZcvPzTPLfl2ukC5dtvl3cIvDoAx0uU1fuPObuhBYEFxw4w0IROjKjZcruSHOyfgbMeDB0ruRL_JS5LB1hvTPMQ-6gQ6AT04E4Pld18tzLx00p9FzQmq99LqVJ94p-7vAV_KJPFI8hzODKKfMTI7tn4qLjmAXZiMN8_xSPZEjaSyXmlyA7KIS2ROliMEk03GT0447e8wB5IHeE3maeiwVcqDpx8gMQMOz3QF1r5MuXVSGpjHCq-wer0ex6P6E9RCcDxs6V5JtusbcWdmDEa2nAzU2MHkDHLIsONux5QHHbUjqC4M9bX69YFAZFJY6vnHx4Qx3eusMouwRB9ta6rV1m0vUcuKE7wh9YTSbd2TgikXNgIlqusI2hFcK5Ch_juzKeJVTqNBlkWLczmMOYp6syrl-v2gywFjY1odQU7djkaEkl-BaDXtGZ-3p35kBdHTYDVq-C1q9Wa9cE9pL33Qc9QKP3Y1rs-2xXPWu8hvOIHHeY-eb8mng8Y-H_f7pnAS2JelSPEQIRrd2ns2gg2U7r0U5n17eUwcWe6MUU4nUHbHSJo0nflg7fcMx8rHjyv9X_DwX1x16frqw4Rk0OA8W6lj8-XV2BuzpzASwU1rck5JRBd4jg2hEN4CmDAckhRrN_oNQDAuC8KJJQb6EhRPfYhLo7Zn7ydza5ULztzJayO_c52ZDSTpYMsR2Y5wM50cFoKCkBxEE3bW32vBjbr0oO_wbWdzJyZ5WeWf_-OGf-6utyk0rtoPFTATlWEZSTk9PWFFofLD_Yi21PmPnk1q_c6rHDpQjVHJDPxr89T8UJzZOeW7sk-IdB9bGWr0YJoe77qE5dZ1YpQ_hdHaMv1-kJr7EKhqwn07zaZTZ7a0k_avRxosymsNnhxhm07=w865-h972-s-no?authuser=0",
            description: "Red city with souks and riads",
        },
        {
            name: "Imlil",
            country: "Morocco",
            latitude: 31.1472,
            longitude: -6.814,
            image: "https://lh3.googleusercontent.com/pw/AP1GczM7_yfT-QwimogHcPN7vhQ0eVYeSJtjNrlqDpbGNKjZhY8r__Veu1WloOTTpN5FbbjxJSCuM5jS5YwzC4WU-EnuboA-gzMkNSFRE8HEbZd-fiQSAogqvL7JVUuIX5AO5_GYoS2UbqnbRG8gF-hf9uHkaEtRliDWomZQGf9NiW3bgcjgxGbATNmIO13ifqGY2wqp9Cwt_7PEqPE2bDi8y_KJaHkExBH-HrcNoaFGKZem9zlTai-hCvgLI_GnvSMeZq85BQV5BUixrAgi_mufEv0Vwhn4L7d31zT9itAuU8aluhdqpT4UBa1Zm_pSmJ2o6KIpYbm9unij-Km2CZHyZSn2-zokCn6Wob2DVOtTVfOuPgFMrFNoRPv-SEhV0Q7zhrDJwWRPAIT0dU5TsNRhZExbKUqklneiOkyCOYoOVOv9KWoj-RET_d_Ww_ovyHT9O0sOOKzjoGOtbMlb3CWIXdZNNEVbq8Bt4n7anQ8CSqvaIemYJCA-AJWvO7myj4v9SfleYTTY7Dm9pibc80O6IIFxmP3aWLlbb-QQAUL-PRdUxfsyqmlPSblrhkCXbZsb2Es0pBNFdLeEPrfeZINXsoJx3IdaKhY4UhZmIoqJlybElOkLVpabcZRRxHRfEaNmdsCh3_LCRVWyvybtKoAgX7HOQxvJU0_KInBf2d2Jiqsxc1yRu3cDyXGS1aYShEMKH9WYb9FLWhe_8R5jNhenaa-kFn7BWY3OQaL30xSBpAQpbI-Gea37-Oi19s6pvQFtGqrTJRSBMaNj8rQ-lC6bEo7jfq851zQ3D9bJdQn5Nvj3MjwSxHF-acw-CB9CH1B1GFIh5iGIDQNtul6kV5Mg4KcqeQ5DWHF-eILt16q1otVK_JjlcFTwya3V1pkPCX2pgIQ=w835-h972-s-no?authuser=0",
            description: "Berber village in the Atlas Mountains",
        },

        // Iceland
        {
            name: "Thingvellir",
            country: "Iceland",
            latitude: 64.2558,
            longitude: -21.1294,
            image: "https://lh3.googleusercontent.com/pw/AP1GczO_cncL4mJZWf31hJXbdeS8P6HoXm6KfwCRSeCNLmMFlDIAKIuo1HUk5gFgpTQKJgORxC20aPejDLwauLQ_Y4I2xhFKhS7U4LZzNv2numwk-NQfZk0D-raya3FUxMcDcliz6hvzYWnW98v81o-QSbnnurQlAZQ6qRpEnfmXIUDpMgZNMl_P-At6oCPptHWBW4G0u8vfaQrub-e_Gqm8y7YJvLw3asTws53rAwk8MvmDD13MDyW47WoWW-sUXQaf7sbwUwZyIFWHXdYTUxdboy9eudzAa6YH4QA_oSXOSeGHDGU7R3wywe3JX96OeJbeQmZMFghX9Kcc6Lw2_wrMQ79rkz1oTv5TDd-fTB0jhJ1PRXZrLCn4is1hgWDJD3UhSNc2n4ODrqKKSXcWkDQmOVWZtPJn9mGxOUg78rinwELno9HPhUKUu90Bm4B2r3JbClCrysuD8ZmcrQiOGYnDTqX1yQEin7YxkI51iMKKFoFnB3Ed2Iu649PPeFTLrla3WIcl-3HYljQOYFbvGgve4HFYtvuMy-_HTdOiTw4mwLsCHIKLXlJV6OhiPZ4dOeWELGD_wOaCN87_Z9ALDbLmgYj-CxP8AuV9f5iK7iEuFtPe3X5Pg1jWKNxvTyNpxYBoCvXOixK_B3nAnxUsrCU8DzVeaXnwgjH9K_iprLS6SyC-3ZuzCfqeOdEk3GBz9WYsUmudMp5a2JPrOnuDnH4kXnU1aQekpR5-AnR2qC8FWGuondNeil6E60Woamk-cRKOl-AyDda__3UbF8OgwC3XPN6ZywTfRQwsFGY0PebBomy9q9bwdcPCGnB190EmH6QN06sdpEjx_MLZyS14YyRZo3lt4S_4T7ddTUfl7rJ87KQ5L2nZEu2qsFPUP2ovbcUamYM72u0HFKijSmRIcfpYqW2Qk6xwpSw=w996-h747-s-no?authuser=0",
            description: "Historic parliament site and national park",
        },
        {
            name: "Reykjavik",
            country: "Iceland",
            latitude: 64.1355,
            longitude: -21.8954,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNNGs2mUBI2vIEWkEY9aO8Bt6w1qrsRFBlv0KcQ7Yb0kLotf9pTigt98IyDXR5K7h5qla2zIt8rtTq35BCQ11hPs2aQyFNupjinYLUGVM6P1i21qliuYmF9dR3WWwhf2uA4IpFSlZZDAB9V4pEO9kUPU1urcg-tkm4VaimgXggDhF72EGmTf1wNEVHCQCeW-zY3E11oe4wFdxFanctxllip0F0-5L8irk3I-O0SNWQKIyvHJcbJ5oU3L5cIxAtl2xXJSI6ba-8ZoHGohgwsaLrJZYu2fWd0c4TxPGma0yO5wBC14DbGEiiz7Wd9cGlPVUVJjR6rRfaEAo3wptI7YNHMO-ue1_l2udVFuJC6jG2unFdb0s49Xw4E2VNI0YwhaV5-vfxdllgvqG4JnlkF1bJdLGPU1TRWCsqyMk7fxs0QJAYMTUQKVDiQxvJLWh-sEQ493Xzrn8vy00R8CmMPogxq8FmyEJksABD3eyJ4gD-RPX4SjNa2wURDly8UFKHf20CtXstwewQslQwsV0qqrf5bCkWCrWP2ykylwU2McQSX490aHgYXfANAqUoIjjtE5_u3khoi_qmMrwa-NutI_5DhtjM19z0Qs5hZuncWcDxwCtcvo0ItevstVxW9or8HUPNL8tLP0qaKI3DDjwlxyLlglNqYpwy5B7ob5XKA-iPmYy4_VaUGqgL_GkNqsJHin0AyofIro5NUYbzTtFnjjuMRF1EvPzXpuAqMnBc_SIXv8TGI--ElMzG9_UAJ5L_BUTN34g3bjjcocHLOR3WOML0Im3fZB7rsG5TqWFCzgZlUB52F7ajNsr9fnzS0oNkkRxkyDkblawscAFpeWo9ljvwFcMHlY9JAaJn1g3DSKukGyKKTLtF4t9UVWnr5C0g_uC6p_Y8ikMDpVi-xFN-FElz-rd-lJiM=w996-h747-s-no?authuser=0",
            description: "Cold capital city",
        },
        {
            name: "Seljalandsfoss",
            country: "Iceland",
            latitude: 63.6156,
            longitude: -19.9925,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNwZBiZrB8w0O5WAguOsWkQ2rUscZgAMI0bUHFQzy_Zer4yW-sKq9Oo9Ebpe_NzxVRt4DqVowv-RdMBTEi_eLhmE0OZBSlAmuB1qN1qSK2qNBJGvnWVnfQs5di7HmRgBcB7PTCmR-sJm1Dg289JTLcOSxKZpB08TahR-0nyDQJ7GdDi2V_Ytv0T3EFcKM_z3DLfK0Nlc7-EDGiSVotJSjINHvWR6l2wUXM2RUoc6kLfTIVGvDgWptXh3Qm5_qQGyMZB7mcCmvHdZjlmkMuQPxw4OBlKGE0QJ-BZagGrDt5wlorVfMGRxjGVTgXUV9LtWpNUnSQXsRmNm8LsRH3ieus029W3mlz9-AZt-1wH4-1opYaHccCZPRUCrjUWcJ1-DXISM6Iq9WcOoBNrSyaK90cOO_4-isJ0TczcPxDFV7T4p3YrkUl3ytdvNpH0Q_e2Pp9jmg9Xu4CB5Xfa-ocN98MwSa3IEpvqUnuortiWaDk8UWwC_t6MWtTnW63HDcxePDYP1F8SWB67xd7YmoTNmfrEPc7jKRQeAjHEytnXl0MOnvB0IZ1PwJIm_HPk21ZbRn5MX3NJ9RwA6Q7gqQVBN_ty3-lTJ2p0CxAF17rrHN9NuSItKydjJ-9KSjRLY1B_La53_toZZ7nyxBO1xI--eADPVg6hvVwOIUw_uPDLKaoiG-_JPLpd9LNIs6H3iHEAE20WaFTd024OfapBpPcVsZNS_RIFQRKwmalBbVFikB6UEQbPo66vOAx_Tjl7yrqFo06v1mQYyIlOLFFvI36QuWIEhVAGmvVYG_Ak_zbGrvZVEdwi2b1gkJj57NAYauIcmjGE506YifYaPjydcUSAtI0PrbdIyRFbbv4Mp-NOWOcuB-hJuFZZgvapA8I9Nibto2DerDvDVn14YXB-qfbyELwRcKAAIt4=w729-h972-s-no?authuser=0",
            description: "Iconic waterfall you can walk behind",
        },

        {
            name: "Selfoss",
            country: "Iceland",
            latitude: 63.9339,
            longitude: -20.9971,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPL_5sc8lh2aYpS5_tQ1ZFQnN4rkzhOxJxoArlGX0FQJj614-DrQTxceH0DBDoiYMWKfqFyPQs_WKFoBnhBmXNkUswR83nqYmq9tHTMg-D12M2INsDYGog4wh7KmUhZVy1hMlPA0u4rPnK0nSWa_cIspuqIBetFC3wiCbHEQBaH9VXn-DXmKwgHNJfooeqaIt8E3CvpHm2Lwpm_OPEMSYnFr0JQVy1BLX1Vrhzwnph1GFlWyOc4uohLBlSC3SbSWX90FESjsAi3VFs1vfEF6lI8wPLkqohTMp_ja7wjsNBe3Af4H4Tmw_KoT0O7OTpXdMxrDojiRKTW-lb87oFpMEE7jthxUu-woNJ-iAvX9bzMU46uF43YMG3FEYtxPNiTQ3-Kp73i-9Amn80WqrHBpHsgc7NyJQbGIjtGxmNyt-MFkQw_0JqdY_8_HVkOgdo1f9aUHKHubhndpCObe2syIdBR9SBN58SKUvQXd8ORpXXLSaRKMtTPSG2o-wIp3tHCJxYWm8-_bptVlj9R7A0VApmRhZo0_fRrVOe_bVA1fo7esOS7DI72I4MBbQ-xsOOywJBmUVUcePM5NL9InTOHuEXQ_IjKhWNrP03bqr3ACQHJJikHYLczCeQAk92wVztVSQVLdpAz7kCefr6WFYfwhat89U2qFU_29WpZteVlR-G1ssvrg5bDAbarYcKHwwI_vy7-3UMDYVb947W5mbXhXUdGIJ5GcguwLWkBe0J9Uekd4UwZFHBXSzpW4U1JLNJIH_II4gADMJ79Vry06T2CRINuJdyZvnc7fyUDzTFEZiCAOQwTggTiiv6uilz-9OB1RC6ZDv9vNha2uFhvlGjknWLqwJ_3BzuCI2kVtjToQrpsuwHKB3nTYSVvyLjkjcbGi7q4ojbklNG7ZxWRL4CpFg6azQ95b08=w996-h747-s-no?authuser=0",
            description: "Town in South Iceland near geysers",
        },
        {
            name: "Vik",
            country: "Iceland",
            latitude: 63.4187,
            longitude: -19.0059,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMrgwW6jbUZPKDpWmtJz4ysFyvyXnZFfbBRTfrZG7aXT_TZNQwiFLWPtbY3lJyz0HXNnhHUkFw2-qbK3dvGZTtn5eCJrUdWijxmJWkKXjLqWua1QjcNKYJ-qG5Bjh6gAr_WexIwDdR-yR_w3NK19s2fOaDr_1IIfGHBWc_oTmp7vEGyQdP_pNkpH6LjfhZbyrQMhaJiLQI8xXjBAwn4QiF29stZ4cZ-Sv3otViU1C2Mxhv5KhTPvSgZxc0EA5J5TVAHd03vko0D0SugyJ5GcpHLehWBUsz7G4iaef8cGW-4GOxSHYjXZXGHgV78WXIXxjp2NFPYliUBjGR0arwBmJDtGt4NcBCt2-MKhaRZKOqd-3tugLo7STBR1RMmGYuKjjm1EPv37ftSasl9J6pg7YJ21fADVm7yoPR0rh0BMOO8fVyn0RKxg3rauSNERw65Z6EJKGvlJuO7-J3E8izjriv7QGrxJMxjYssfYEreVpYwLD9Gr3Sjy_XYD6Nwym83vPujJvV8t9xUVdqmvBvZbPWqey0tZUc7zdJW_zHD4hvjfWAu4XhTUHIOm4MlzoHz1DXhTuiU4D8XyQIwIIHNebmU-bKbqppaPjAChwd6YVL7eA8PvbgzXdepRF2GScQisa9aC7h76Jqe6evPxuZsEA6-GyvPw64llLyRp7ALizRCXxnUAkdIlGLpClb8IKiVbDPlOV-1roSbIK39W13BVu-GqoGwsajwET6PxgIMigm03Omc3X-cP8KZj1vcgKEliZyrgZmhUpiWGXEuVmsDv70CKwjFH6NqqYY_qq44HBXrhjHNZnJU67EJ1Of2SDI7vs4oJH79MdwJxbN0Oder_mAa9PiLKl1VwEUisZ_nSWE6JrWObEV0wjQ_kR7_TiD9MkcFt1OkWbMVSMVxlXJcU0OCz-3910A=w996-h907-s-no?authuser=0",
            description: "Black sand beaches and dramatic coastline",
        },

        // El Salvador
        {
            name: "Santa Ana",
            country: "El Salvador",
            latitude: 13.8942,
            longitude: -88.9598,
            image: "https://lh3.googleusercontent.com/pw/AP1GczO19UOyob8Y4asuilZsM5ZCg-zeqXOsQB96jc38pVDAoQ7UnEvkZMvdbCmMFJ_8gkpeJhbOgTbw0GhCKaAZ4H2Jjnd5y71UzxvEo9tw52kPGlXPOCcIduKhNhfMOCFeuSkNZklxDqxTfsVLw_buzzJP7d2L-UikwmPkTT9LwpuYxMHaF9v1xa6Am8SwXL7HgL3wMfzGb4DRtvAHhf1mbmFyRDXFm3xA_hj-hjGMjycP6o7sF-Ghm1yC4mC8Tey5fh0Ez30pJce0HTgOmpb_yUKOKd53TFQGz0IToeOABhXfY7kvoZwrjysLMR15zGwuC11fWszMHtcdydy-XxJshKAI5xMAVwJ3nFglCh45fwbyMDqa6sAsmwtTX-WMQJF--HjHgZ_4iHaP0VVYLWNR8YzYQglJFyuSwn6lOCYPJkzZElIsByCPxqxE9Vr3S8GAvv_Tsx5lF3nUS3VlVG6mZ3KSa8OXJkBOxKzJIQAobzyxaMEsZU-TouX8gbdZR1jIESzTs19gDUWpclPvnNUzWFintxwgwnlKaHVOnM8hlDF0se0fTap0EYCA4erUIdgYG6fwqJWVntnvQTO-q-xOTzj9nPi2QpPRLCU01MpSEjZ0BHPEU9g8V9msgy9vRCmLrIIoXtyt-Kjy-OBqs4sf9nKd45UXOdLi0vedTqRd0U_hHzhYhohs-zEBMuN8UY0cJsex-6aRdL1MyXqtLZGghQ92UtVQ6EwGCj-ZDEW_NSnb67uIW1AZ-K_1YRyUt7v6Tnufz7fwpuSAeban618rSiNKYzwbgVad9IiL8waa2cpB1HqcsbSQZRK54PycZgtCfdfXTlXqF1cN1vUmKbfI_A5OUYuj2pwfHSQ7nnEQWIoC4hFjOtgN_bPMXQP_DrUODI4=w981-h972-s-no?authuser=0",
            description:
                "Colonial city with a big volcano that has a lake in the crater",
        },
        {
            name: "Juayúa",
            country: "El Salvador",
            latitude: 13.6431,
            longitude: -88.9453,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOXHFf2QoD9QORAni2vmEOsY6-ZxtRG3yFtGJ_6fsjOqjtiwXJPxLxnmKrb9wD5blt8S0SfueUgGT2OS0hZkqu0OHGrjxZHtix7njUOJdr4KMD3-pYfKI0K2O0C_91GfKJaBszL_r2I556sPp1nfrmQnQMPhUM0AeTpcegD40Xp4hfEfhpsp67W8r9hgLnlpGdpz8M-PfDTcn3lv_50pfkgZ90SAytct4ttZV9rO91_iL1MaiQz1jB80eDXLFidt9TCgIO_SNKo5A6qoZ1TZ467B_99lyNocanhPu9r6Ccr_MFk_vjsjeUA_NVOgh5hFfwAU6_KQd1KN1ikpr3vaSl8dq_fZwcY4_O3taCKga0DTwf2C7YfTz6rZLJ-luuVlgyi3hfliklizA4q2DKPElE1TwFSk0RvuIDwM4SX4eN3R5oOaCS-lYBv6Y8yTF4sEmpOHftRO-yGhRFAOT7CbNjFPcLRLicbpDYMGsfRT70WYZgA7gOZJczXreoCim4KINRSytxShUITf8PDJjUy41lo4K4BW_Mb19MUxjne5N_OWQODrfQeiZA5Oppx_oyzVaGqf3zyntWLcPf5-Y_33fPE0aCUmHKcEVI_V_Zw2D7wfDkfcwshuchCUkhrHoXxRCCPRDSqwlsllCfzamXUUYtbQzq3U_w75_90Wu2gUJPVRzdQiUg-gRzjNapY6rR_VNcTSONWYR_HyDGJ1wMlprkU_yKRXF4D_57P5KEAIaTCHvXHlLtgtSXw18WbTm7g2oz9VcfA6IbgJUk9LOdEBLAhe9hkU0421DovOXfkgpg-igKV0cBe9T2DmGYySJNR78vzTWxYR7D_nQVhmPh9NEG_8moXjZ4rbj9tPKOdQ868HG3yY6U7yp7_Z13yLbZcZe0=w772-h972-s-no?authuser=0",
            description: "Coffee town with lots of waterfalls",
        },

        // Guatemala
        {
            name: "Volcan Del Fuego",
            country: "Guatemala",
            latitude: 14.5586,
            longitude: -90.7344,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPPBBy1lIVuB7TgAjwlGOq6pYoX4aWVhAsrQhoca_jGirDroy7StNTvit2qifzD_zHBiJ5izxCbh_0yfHPZ05c602f-B3n5ph8bNPZEIIuTe8xmkHeFmyAwVqyGa7l0Am0eJp83N5FYGwAMG0XSWPpNYBLpuNf6C37qi9WWKjBTjvb0beBpCsx7sT01tBABsn09QAfv3cE_5cy1TgE_hF-wBNatQ9UyIws_niXQwS9cLdkr0VUK4ZxBuUT4hPJ2ShppzolWI0XrfnKxOTunt7qO9gtkUnOZK3QsdDl9qAeDJOS-VOERE2OytlI3Biu3bHTcLrKVfgI6HP-hOnEt8vhHOt9ffYFda7dWOkrVx3yymbppBUj3hEiKrhnGACrhJziM4lsIciuCP998u_vCf3wnJM8j660P25ILG4u7O30U1loLx3gLocSd-Q9ho7KoBVQrPJ_ahDvaQFOsAkY2owze7R4jXmPmDqI0czRrYelp5nZOQL8cfhFE_S3FasV-Exe3wH3LEgDO7t5FATN_BiFGDFtodqZIhHJBVjHoHHHMLTALjw6yWDlfz1O0BgFvptdXpvHsDsgD_V5cEJwQ1Zdjr2fPdr3D0FLOswZlw95CKcYU6xuUlY81G6DAXAnSBTWkwfE-zn5n9yyCcPevwjX1sz6TeyKDFF_84JcVcoyS6LnchfwU3ww2NnHMEFbor4kmpaO9P9TQx4qbYFdSwVvU560FpTeiSNr8qiqbPkIg9406xHnENheOYzx_D0rzD_ROgfill1UMRe5_G5FEld4e7OulBGDbn6SxHwmniv6W2EjHkSshkw478tsmQ0v_BKT4Rl0lbBXJjEnSiNyuE1tcZktzfZk9Y8KcMTcT_d7LCer3Q3mGJITrGfZc1xFgOLU=w996-h731-s-no?authuser=0",
            description: "Active volcano that erupts every 15 mins",
        },
        {
            name: "Lake Atitlán",
            country: "Guatemala",
            latitude: 14.6906,
            longitude: -91.5025,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPXfzbgL4j8tdvgxjb2wi0ARC-65ej7XFoIGgzDV2WlDOqO2fnhkVL5sZ7Y3p928UeU23iNdVdNB0wuQaRWyqv7p8014pM-Fi_Nq7Rszs6M37WigEbLukr0p57JXGkpEB2rkgO5-jM9ZaJyoxX4iloXcP3hRib_9cO1wmwpvKUFktfsz90rPoepBm4sQr_NCP948SIeIZ0mSOouqkCtqlBwDIXfgVCJ-SI75H1Dl5WtqKPIqumurlrfCUEwALTAzW8k1WAYVnF8CQviSNMHWYCqnD0oCFXk_mdKWXIKnJwyETWDZ4S5nMh0ixSxYGsndl-j_Ljzdjgo6uObP_632vSP5dM1yHn-8lFNM7Jt3vFCptbX5G6bialTq_T2_8pQUxYvULHLYftlV1A7J2qbRk3Jsbw2--6oI_gEfVug2oSFC8-ZAgGGjpRYq2YX_kKr_88mQLjzClFa8HZiM82p_bNTXZFB7NFEZC2xETGs6AZ35wgVWLDPDeWIypc49n31jgTxN6zCaYMOFjTfMmln3oyc_6KxhbiVP0x-cFJueHYvRgrL_u00c4YIZVl5i8R43Xzj1BPPxK00NQESfZKqK7piIGzvRuNJrZvBJUCY4EZDkpJxEU45L9s9VVG-i2muh9OjBcKMddL9HMH48ijvTdtZnOAgM4Zm-VzcjetXAnW9LTp8mSZv9CvfVNqA99xhJBW_56YRs3gBxgALxcPIxOd0dH1vzBB_4lNGjSLiSyHWEBDMFycHNVre4KcsForCmi9mLrlm8WqpfLo3bYA9aj704T8Pb02Dutgsc2GjSWUhejVg2Azwd7JtN9gx3q7y67YGw5-w8YIMtcTNkR2F6n58qjTR7IysUH6yKbM5PMUv0oncILuVCkbF2Sy511INqn0=w826-h972-s-no?authuser=0",
            description: "Stunning volcanic lake with Mayan villages",
        },

        // Nicaragua
        {
            name: "Ometepe",
            country: "Nicaragua",
            latitude: 11.5,
            longitude: -85.6333,
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Volcanic island in Lake Nicaragua",
        },
        {
            name: "León",
            country: "Nicaragua",
            latitude: 12.4348,
            longitude: -86.8779,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPCpMwgM-XkUQCArYzCXS8aPai3dWrFd-IsW3lYsjmgNo_LkPD1hvc6BlH_5xVG1_9D77obiZR3qxn7h0JgSM0hcXyu7tW7OFC26K3fb528Lh-3Tis2KvpBkT87DRtuQ20fg2ifLi2uTFUjDwPDPpkiOQk5CxdyOVvRj1uruSKEbWSxZIS7CXxlapeaGo_qk9_VPiiEqHRNaPz55sbhP0TAh5WnKoO0W5L-kHOFkeeFd4ParNshC90fJ0ASG9f94jhbbujcH7CKr5rLCSI6qeLs2rwOt_bsB4JaJTiEGruEb8vySuDXAbqqokSwiHCWJHyafI7kA4vZe0FJHGCQ8DiZ7FX4-OWXRzTibADkgZU6qs41YM3tlRlkzNYo3rlsJArVrpYgF9CMpnsHw-8xYHHuLGD4KHu_0fqrGx9T3iK2F-yXenEJE6h64wSLCIOOQQdNZ3Uivb0YG_flhdbA0qayffUbeiZrCYte6thLHYAILrLQutZSONNpQFW_dPEA2Bbd6e5-eoZzWj6QgNcx4lnBuupBleBn0QxyD6XI76WBsTP3-mT0AGcteFD6NJjvtumKmVNttUjju3fxYX8vq48Sq88GaFfd41cUkeRnrXclxnZdlrb3CLLMl9wsVn-oIdSbJYDGrIWLrp3MkzJs3x2VoI8ggv0qKMcNMIDWx56BLqooC9ekZ0_USPyYBzyqwOCtIjD7Dj-qk7_lJkWAvgARpvTrvbEFNTN2GLr2w4zEUJ17BV8Ab6xbOrSYpF_WENPt2jsjMbsrigNM-VK0z0RoWxzn0PqmWM09NbJiUg8M4M1mfix66kxzenJF8659dnf4OpK9Rs8fwC8bB1O6nZQpQYPGRyQfv9waYVuPaeuVgBYYCyFzBpWMX7UaE7_V95Py=w996-h705-s-no?authuser=0 ",
            description: "Volcano boarding",
        },

        // Colombia
        {
            name: "Guatapé",
            country: "Colombia",
            latitude: 6.2303,
            longitude: -75.1567,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPV9Len5EWkby1509x0-gZKKZCvfd6zZYcTg0Sw78VkzXt2KjmraKiMOVfN9ewF8TjwgSOTqmPTGrthjLDDXAo_DqGmJKR2Vl5cZwZDD4gR39VtSc7_LgtBIpOe5kjwGQaD28BTPVSa-hu5rafybZL8UepILgbQxOmJnchIFHyb9jGcXv945wvQFXXoPhPVyBG303u3OGIihqN4qiAnchvd7ft7ixPbZfb06rykuzT7unG1pPKBiVwh7v_B_bNE6Ult_ebUo2UbNxb0JZOcMezyQxGzdS6JGpk-ju0c5v1AHPjW1kIiVG7bd06WH2qm_cTIP5ZAm1qM5x-Nbpxh3feKETG6xT896N8BepL-oP71maBKKaMLhRS1hWrULUqUqKP96YoY4zKEn-JFS6WuTNoN94MheVWWT_JYxa2hgaco-trdNUHLfXo878R3R02Uo01iYvde2rdHit3PCg40ixb77EGwCpKTMBQZecq8dUIwuLlrxerGYJ0svjfol7JJQ-0EfILu7D9_XG-ZaBlPAYdw4vNylrOBXgAui-l2Vd2FdvvgidV3va9LeJr5fdYdRw3wz50gAHqeYAtrObe4i3ELo2NHVmerTQdos5SnXF_C2yv3gNEP9TyvINO5U1xfeP36L-z2NX4WzZS3vp1-ocGt9dilB2LEN5-fUyRGcLf38nStIznIr04UC-AJUFzu6-_AYpmKZWVkrlhmDzMo3ohN5wxvBUbAvXLSwjiWnCrzj_3eN5bb-dswCwDxSsnY9Uic9vIrDWBq3eyiCWCH5-KIUUTpwgTPFbhUrHBbwQKtrGOed350N6PIAIavbuFzQEKXBKife_NEf0IQ8Cm2lqrL9Jj_mLH8tfJ2CEY90NgMld0IMqGAFICei16VhHsXNc1lBLCpaQWy0xv9WFeCfFy1u0qwbQ=w996-h747-s-no?authuser=0",
            description: "Colorful town with famous El Peñón rock",
        },
        {
            name: "Bogotá",
            country: "Colombia",
            latitude: 4.711,
            longitude: -74.0721,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMszX7BzBOuN7tdx4ZvrsjpbV-y8nJYoHj6ETirYl_HmYpHthGJoucu49UScFrJvzc95F-DRGUbWZHPLGme5W2KOuxhfsSvBYUcLO_fO_fyCZUxHL9TLkgoNT8rw3sujBSHGInVGGfqWOm2pJv4EQwtdm44dC38-BX-x4AhDd7Aofv0sj5-FVGbQdlcNdJ0A3bSCc6lnSJjDMl82Hp97UqlxFBIfb0a8No2x16hZXn5ZdA2G08SNvMWY1Lm0vZN6mCeuFs5jBhm5riUpn6mHLYafrHlMO8lZ3x6SUib3R49tBKhWH_S8M3qhfYuF9YsifyoKMyAGcVDYh0Hp2qluepKx59CZcMzjlGkkkN_E538y0vLlPazAMFi4uPJTYrrvlZ3bxkLqqEhkip0N7ec8vSUz_mIYydpUlvh_WhpGxShtxmqYS78-bBarnFeyqRa2Ig7ACpIKdhscgZTm1lq-v1hUrh8QXxdzXTz5g-Z-xMvYBVVsOM5qzdtV9OBwm7WRJyHBlw7oTNYqL436gz-_0M9jJODMgdx1uNUTjxBRZqtW7axIkoAZ1GzFQ7ielIIkPUU27lMaQp6XPXHT2T1pWsE-0jUNph_Eu-vM-Q6gQybeF48N0KOpCwL6BaUor7VqYMRAsGgPZgVz3fFX3YRwSEZt21gM3Q2s6zwmiVx5XyHsgW_j8pVqheN7pVY1WziPckE3YjUlXTS6M4Nmr28lYXttCtJXgFHx5aITTLSTHu15-9XKpzsYYSA3XsNULkPyAjyQ831BlloAuvUyAIKNE7_h_85ccu8_7VOPR6K8Hm9S8XrfKV8Jq55Amvs2pkD4z6mSJapLt196etbtr4M0nfAOoGONsW59hTys7F8gO3nuST4o6wcQi-wmVTvAB5etsKmJ2Hwvn0rYfnjMbU-J9kBVbUKVw=w729-h972-s-no?authuser=0",
            description: "High-altitude capital with vibrant culture",
        },
        {
            name: "Salento",
            country: "Colombia",
            latitude: 4.6369,
            longitude: -75.5706,
            image: "https://lh3.googleusercontent.com/pw/AP1GczNYy8FUuz1geN4U2V6jQZtAXc0ob4SZaqQ5fr53GI_tSHvb-Vm7S1-4ZBAj-n-jcsbKEQ4o7nN4i4PkLUqy81UXRXiKVAZyg38wQtTExpJYBw3EDIbts-_bgPEwecOnCTNykJ3sxUbCj5DXtXNagd-gAs9Naq3gFQ7VuIAwnzFcYCjPHdvFjQQk_9qq3VCp-m75apsUo89hOn5_ElTYGim8u52ke078-RTQVTYJTO-HbuRIUGWMFHpIm51SRYMa2wpOBct2XVrFogDInDosG6TdVzpSRB_tNaEYokV6CQLa2AwjoOpjCo5a3-CWe7hn8okzriWXnZkJUwigc0DHesyzlgkQ8pSbIC3aCc22tDaBi7t7Vjf-cJEE7Lt8ez1QDJPhMSzV3J51dGE1P07-7OfMvoAar3JaOAcowYcHzw0GvRd8r7waA5nFRiVF6Zms8-l_i7fUrmEip-X6WqeDPC7GSUR9DEIeWVNDgkxIcaP3UHQ7n0svvdfUiEQuOAYAAtdr66hi-EzeE4JqfZJtI-XTOe6V_XIl_X4n0xjmKUN_fPwn2WEU4pI7SjOnrQ9-uv3r5KRDKRcKwryHq4aIqBCe1iqlTxMBvans11n9FCFGcnQAElpbi5hZUHnEhjo0hLbRgOUUCcYD7OP5YegETSq4Pp4WkHi9pAfJfL0jJ4lnBTTobFgAcIccw7RI5ooRJT5-bbl30_BfiXZxN-t5NKIXTJq2RscQW4lGHz9FGiIEaOKDheFvaN03Yfc0z0-1yfLNbDpukb2189QaF1sIxJsaoB9vrE-sDUR7Rwh8k5WVo8NICpsT3RsUhunT3QSNH6lvM7C2xgNkyAbFPu1aWJEIIcKRsRqyKEYxjO7irFzu7uIOs8e0UcQ_9b1bvT1B0PkK3Flhj8jXwwc9V4igQkA0gKzN_w=w996-h747-s-no?authuser=0",
            description:
                "Coffee region with colonial architecture and the tallest wax palm trees in the world \n You can also drink hot chocolate with cheese which is a bit weird",
        },
        {
            name: "Medellín",
            country: "Colombia",
            latitude: 6.2442,
            longitude: -75.5812,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPTLtLUiS6-DXAPUgHJiU1KEo8S0LKRom3Syy-Es11SssJwmyGH5aNy8EuIyBf2tyvLgYeMyPO3xMIGzsH7gH9SnXfKY2P_S5V-NlOb_4izqQmIJ0_FH6Z3mUA02JeuegnBl-0qtYCP0cW8Xyd1z4eyUHHBzShCNMjV7AEOpKSQl-teUSQmDk12HskJQsfVBEiu4dDfLjWG6GBP33vnd5FUj7-BR5HPXjK15Yn9yCp1nb8yGTgFGW_Ld0k0k9DVZXLJCRA_bjLKoTN4GP_Uke9nhDSRR30MMmEMwYYKnmu4LOk2PWMuOxBDqjqh7L-GtIve9zD_0DNxfR5V41H053WAkZc-xhVbmjhYwilU1nuEIYNKziWnU-28HUIEXWWGjvXD2s4tyUo4-FyOhV66kyMZDJSh-DnBlcoFtULuYFIQ8uAvszHYbNoCtANwQ_XacqD41bibUvZjwTwRHAWjRrwVMZtLc3rFkfjrUMWkNYFCMjadV1A9wfb8SZslxN2GV0KduUwbjCBIHJ1Mw8Xki7Bgqo8UGhUa13TbosMMtyJEsFMX2sTUfxqPaJbf-SauNJF_3uQITHpt8RcKJzOX5ojCzxQyH8REZrmLKu8RRoRmkona-fGLTdS0pcZQoxkcj7_Xz6ffniF9u46Ph5B9IrebmcTaxMs4chyC3mGMIktY6tGfLNMbYKZnvHoeml6lX0cy6CBA3IE2Vll_h-K6seOtQX8IJqdqUn8FDbQV1O2WB9w2SZdKI6AJUBXpKiSxo2_0XNVWHhT6q7sREeZJLfrYdsYjfSnW1t5HmiHyyIB1c5LyFXwdzlQiT-xGYYSpa_zfsbIAzVRjBxL7iq1eAEJJutCiMUb9h71Rk9BlX885fhkjDTO-KR_874hmkJbdL1sOghBdtzCyO__SGZ4gkn0XsqS0bA=w996-h747-s-no?authuser=0",
            description:
                "City of eternal spring. \n the highlight was Comuna 13, once the most dangerous neighborhood in the world, now a cool community with street art and music",
        },
        {
            name: "Cartagena",
            country: "Colombia",
            latitude: 10.3932,
            longitude: -75.4832,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPtTAUqtvM_gIpqlItStyfwts4PrL6HqgoOmpG7w3TlUwGArHrVzb-mBO8DJyRWGKCwJaR7Rr1YqmDRXqSFbMTZsNBaVLAcuMGxr_8V0mWYKhoP8DgfsQp-bSNZsPc0nucSwN_WEZx1C6XUBkdqPvbdKbCxb7WThwJxIhiXI0VcPEajpWD2dMvUwLgDuGo3rtY0puOO61TJ69IXu0cQKbwXAZCXEf2TOxq1cKzBHlJyOz0qX6Hsk3J7cfngH43gbUi4sp44A5XtHGhvTldhDQDCAyVj8PqMF2yxufW-pcByFxDE8hNuPMOUgkwU7WOXAG0kEAbjUeRwjlj6Gzg90kZoEESM4x8ZI4ZtvjQeEtZnKjT0AFN89q8oW6ybIlVXG43wG8RVeCmBA8L1qI45CMoDJi4jZllc7y173fFW1rswefcZQsBVd7woOa2lFUiEs8PN2aB2qNA4EvcOimKqu5MGXD0mznUuzTEwahzwT5_DAiMRhEOzSgcdRm7wXIyIPWpZcApLfv2RX0RSKA_Px5owTYG9KjYlzfjYTNDgT4Q0MwgqDyJ2oYit6ZbnH1WGRGXRRsbQZGjxTsr5fTlxrqUJTVoWJVpWq9FLXiDhg4_pJXmxAX-vpuLayn46LAIrUHGyAPiXVT1bPR8TVwA-J-oqFK1FB0tCdbsDDz8nj-O7-2WdN7DwGEUM9-WtcS0WMd4BNI1SAuc-F0kRP5rFi4XQsxqZ_X7Ucwdy2cI6lBbD3qhyWrzCI2OUSwyzYRcSrVJ-MwgS-yRrDJRm014YC7PjmvW103pXBt_d_fkKDECSfthGy_W_i6x78xbdC8drnjSZPq109aX9DDM7qJJ9KJc8ePh_Xi-SwC4EaiUomVRtt6aE57N69YnLaEhOnzb4qbiccXxyKv3I9Io2CWPSv4Vy8H4gQw=w996-h747-s-no?authuser=0",
            description: "Caribbean colonial fortress city",
        },
        {
            name: "Tayrona",
            country: "Colombia",
            latitude: 11.3167,
            longitude: -74.0833,
            image: "https://lh3.googleusercontent.com/pw/AP1GczOkfVjoIbP8CAtL7lAA6jA5lxF5pyfIKWC2uWc1rIjuUbevTximcXcZ04kK0dE2klT-D8BqMZ6lsgQ2Ycf2cOzPsrKwG9wUN8ma-MI5akUIkW2UtP-8518-nWIOERNqztYBWnGtnFv-GyXeeTX-OuFo96Omxl9D1eIgLo5YGRTseL3FSadnD7CuTZhKrfF8eaIKxbogjKsIy8U73k4um4gCC6SUzZzJGE-m69IOkIwjMFkFYdOIAuLAu0QQOJyGB6nj87e2c7XzviimJmOhG9kxxVt7S3FzSpOGEhq7a6M99INGAE9UxUrgDGt9ms1pUXWIAeHUT28Y5m91IyP17u7RoIaBlTgwVGfgdGFrC_bOxZR2oFrehOWfC9SH4PbnGKCVANV_A7g8rgZMCVVh8En1DtY2XJgI_sssCzuG9ZaD0Uew7ElwcIuiWO1_iekL2ZjlGuJVss9PIgSKGXm7zVkljrPGKCWDY4CjHWKLbwiVsKdHqI-vax3bCc4_aWPDVhjgiZs_qnyNl5z7lALg4Bqh8tTcPK2mhMZmdKLad80eZ_t6S2dDlhxmbfEZ65-WWSp31FnzU04QBRn9IO3dxDgyWTeiy3jbS5A9vNG5DeY7c-mvIwWS1T3A1TBhl38ifndv1hCZhv9w882V0UQDxFi0h8rS4lf2rK6SAQm3FrQDcyybhIqgk9m62_FunTSMq8GQFtgP45ISQGFBYeEv1ZFzVeNvWLRPHIjolh3KKlHP8CQoIfks34fNkjjB5XyTUjiDdEAZPwfh6oCe9GSxC50BOBLYnQ3SEZhPkxIQNZ-6WofqnKyy3-nsRfGCkrd2B4Y7T8kvOLAt6z8Qm3ZqTwInq-99zvuIPySH7Nu3F55CC2Dp0LnM_Hbcvgyt5bplH8C61QBWWcEpnAzeasSrSxEfIeaHHQ=w996-h747-s-no?authuser=0",
            description: "National park with pristine beaches",
        },

        // Peru
        {
            name: "Huacachina",
            country: "Peru",
            latitude: -14.0875,
            longitude: -75.7639,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPoq1IrxHB4Lq0F5A15AblkE92JsOIRq2P5RXULWuQq5UkXyvD-7o-OyzIFG1TLZrMV2FL0kMY3rzKwC7BXv-ubycDjlbyfQRVghFHAD7JA7uVVkQb_j5BNlhSo88En4Vd33PcPDLC-LbjoD_BiTBU1nCh06XQr4gb1LiSLWbQ8af2O_Ui3oKEIysXCgnkbA2sT_xKIzBaRnUevdWZzuQm4I9K6EeynaGJSStQOyuRVkAtv92XCVeA_ZOylnOSj4qxRWTI0eS7u0K1d6DYmYfl-w1q6zoDgPS5eQIskmc0yHwrIM4b_68htYswkF6-L6KFU0cvkkdn-JUuygAF6MrQzmVI6qKKHR8-a6VM9EuEf5IM_9KU5ZGee-3pouENYhaCK__GmqxjUgvPvJKCsVoZ-xBNZb_J8DuXCGLUo2xvhCYftNaA5nD_N8P_QmaiHkk2tWoWBx8hkGMW9ZZzaQcYHrEAuIlMOMUoTja85-hN9wK7dErJAkBaz4W9MtL8uoIH1drcgqbKP8q-FV8hgIhkg6WpvSJWRr4rN10qBDtQfeUIrQQPbEvxHvGiFsyUj5kj-BKd3lgnUCA-J8W4xI_P-XjkZ2U5AF3j-xKeAOVeTEawioZuKWnddk71LrZZDSuOPRrr2tHTQg0zJjsui3mqH9-zSxvRydTCRD6w9FoIfJtvi-5jnwx_tkpSJ8delJwMXcMMymbWzhLlbAGuUapHloZOe2s1JXMMtuYwZlJCFNfKgroYUeA0AhCo979gR6yq61gczVpIiJeRFBjY8QcHeI4g37Fh7KLebHTFN42p__f-ioAbjEEeKZowaRa-ZRPUrHIW5EimbjiCfvZSOzarTOB-nn8pHTHQMilk3-Rv-J82Z6QdmL60pY-hXpVPouPM=w996-h741-s-no?authuser=0",
            description: "Desert oasis with sand dunes",
        },
        {
            name: "Arequipa",
            country: "Peru",
            latitude: -16.409,
            longitude: -71.5374,
            image: "https://lh3.googleusercontent.com/pw/AP1GczPWnivvTMn0AOp9ewfAJOmJCBs_Vt_9zFzgG4gfQnxnAqIt30oliqa1RKdCBxHUxLb8RRKMWsqFuomXoM35FviQDMhwSxi1_uAlJRsv-G0OuhIa9z1tt4Ffw2IRg3vr1cw9e9ejkf8msKizLkgVPD7IWqAynBpLckN8PIXH9uRP8xth1HJeHniRiStOaIWH7gfN6rWWreknZiVi6hO1P2IGQA7XRfXCRk9pDw_QXDgTiBdLhhceTREW8K-QeJkOPNZ5YQJ0jvKGIzmiTu_1WbnBCTo8W8ZBK6YmZwON1IEfE0Gl9K6Zoi-fQxuaCqgkpcw-QSJTl0COv6wVnDS7Et--cTRBnzSPg_YzFDhq2jsJ5lGdztcKHUg63iPG_t6C_jdkJs6iKVE3I0zZjDFtGBvHmK41qibqVgEf7iEr-owrWB6CtMEzZ03vhMRK9aMHG2kFgHcuRaOX12R_HPKGHnvJwSp9N6oc4F7AUMeLJS5vvQ9wpJqOH1tx0TogDRNOfuUdAI-XTIOP-3UAgm_l7NKOR_Uhh3nJRjl6ul8XLUCoZT28X_JsuiWDJC9hOOZiR9_17ackLwwqbmQ93R4O8fJKstC3SFyl7NSAmpcpdnLavzsbmaONUyeQPOLg9rmH5SUS7EVM7p-AE8Q9r_e_aUd5c23EvH-kVXy4vEt9KOxD49rmUKHDUOAEYWaGdX43SVLghlRNuybrzVEb2ix6EVMMClg_Xah7RFHnJO8U1x6OI0ywn6zJjbRtmGwaPl5J-gAIKqcBi9cNXpD8W2MmBi8RyAJ9dHIn-l9rRy4ZRcRwdvuezwDJhkkx0I9-hEEeA5NYT6GKYwNdKHaHf4WevO1vLC9wpcNdFqzXkOUE7T3DvoAIhgUnp31Ej_9o88FTVLU=w996-h706-s-no?authuser=0",
            description: "Volcanic city",
        },
        {
            name: "Cusco",
            country: "Peru",
            latitude: -13.5319,
            longitude: -71.9675,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMpP69MZjwEJU__UvtZuJsYnetDKWYer34IuEDZNVnFkwnTz3wpbuR9EJvGEgYdrtbo4-UQC9mmJbumxuwebZ3NMvOXyGThoEso7Fo1kfZwUXPxJr0ybGdYUuzfNlRy51Pv6fp9nozhAsGf7yzScs3oooZqygfjLjxX0XeZBEzQCRtMO_ppk3URw_DQ5uvLYqEOJsxmZ-zQggUR7Ua3Z56K_-KztY_pNdOvRbLrUjGCwu1rbpOOVwRATjqS5nC5Fxk0zh5rLNDO9MwgGpJA8mBAO8WNwGb7YmcwVBHE_wbkOiT2sS-d1O6r8hB1TflhTqFphboKOaLcO-m1kh5YlmqNRCfkx_mvVruIMuZE19ijzvIP5Qh8P981AJxTIdx4JDLl0yOQKTmZ-YTGit6n7yqVxyG1N7PfCzKkodDBNIuHqF93uAQ6xVwHagjDxtXn7yTLpjzmTocD_DEhpysR3W7m5I9KNVc6bi-3Xzn12Sttk82i0PQnsTIVfFT5EvXkR0NXMkzD0hN6n6lSGCepE7d1CUc5EEKXCSHTFSpFjWaBZVKnNje7lUmJkwYbw_9lxhIRGJbuuGUfZSvr1RrN4pK-gPvySSYwUPTGHSXMvb-HRiy709-7DVVA1nvt09BmmPBeD1XMEnUQXXXZ5C5PbLOcodJOrYn_19KJW0daAv7D19ZplSSa0tjs29h0lbQdhE7vQMk5GV8Ee6vJY9L4Nb89haGvm-uzYHv70y5O5t1VyH7eHU0897n-boQWjDsl9yrSiFONrNpdzLbg66Pcf933-3ZsSW2Ua0qfoaDVWK_K--lFRFSvS1sA8i9RGMtk9CDgF1RgFY4BJ49obq3KTU7ivIKfyEkB61UAxjoyix8s7gzXTknFxx-w_7NRQgsGYTL2=w728-h972-s-no?authuser=0",
            description: "Ancient Inca capital",
        },
        {
            name: "Dead Womans Pass",
            country: "Peru",
            latitude: -13.1628,
            longitude: -73.5449,
            image: "https://lh3.googleusercontent.com/pw/AP1GczMbh03vKOcqn0ke4iFn6_s0komcApOfjBIKNNd77AvfWbV7eMmx5UJpSDowXTYP7tKs3IwqxhssU0WcMOOMQtf3AGjzyeAyXAf-qsCdKpTvjcYJOjam3uVfths5UsFdRpC0xRMH0dG8q3fJhY5hFFQ4yHy2ivGvSN7gwK23_kP4ahyUItBfCZrYGFiKYLUtSq_B3OIo2zyFVpdprAKuOrLMhk6W_Ib379RLw_xl3J2jtUL5cXpgIePyd1G5Z5LhOgucb7IX2G-n2EAhEW1nHj85OZKhyApiNK1USRBlP2qjndPubfKXQjHUq6WpgESb3cQ1HCVbewTn6MWQrx8qgDfpWvoHfO3_hQN1ZLICaQMivtj-zTEceX7c-O3zO7o22C42EkeRJpjeqtdCEvSLaE5QkUjjQvMlN69dAdHfjpAqg7FCvK8gg1wclrsLTc03-h_XZtbEpSyF9veQ_wekifyRU1avCciwZ1zPoyE4tpuhM-pnf5jjcnWMiA9SqvLMIMoACXNkRMl6I_m0p2iKuUuNXr0eExw0crt5c1QtKFihTlYZo0a6oYqYLEOcHk9L59kj9fla8Audgic4D5zeMiDqf3_tOqZfwZWLRWpr2C-cfk8XEgR-RcZgIVEUW8dk5dAT_5e9QLG7bmXx7ymNtdBBx4JXBuS0xZTXKPxQsfkEUMZEdFM2aS25av-5S7y8nn2kyHLRFRucQtNhFEP3up0nVZ7EcDkitfN-ZgsPFA-FePjsHPX0i31LxjMHksz4uVbtd_pnY5n7QxS8GuqymlhuYQugZCDYzQht1krRwKPJt-IY8ZQXhscLT74NAhfTVnUsQwH6LDpmqRzagG1GYGIubXgeFhtUjm42vTdk39FxouBiYW_O6AJgWRIuSEFVcQg=w719-h972-s-no?authuser=0",
            description: "Highest point on the Inca Trail",
        },
        {
            name: "Machu Picchu",
            country: "Peru",
            latitude: -13.1631,
            longitude: -72.545,
            image: "https://lh3.googleusercontent.com/pw/AP1GczONvPwj31TntxOIaIusRtBP9fONEYXlLcjm2VloNqZ_LngiA_c_f9wY06xko7RZ6MkddWN65CkIwsqJzc89lLRW1wRu7HD-doHydSUNPQ8m4rdF1GA1JX5hDj91ep5-EdnpS61VvtoZUJ-JY8MxOXnyAmAkrPA4aHuAyGnPequbWn2D_KLRgAMzc_mtkYiRh2D13_sJO-tgUeD-LgGL18AJS2tiYrpKVqgVRVU6vrp7TDQiNlDI29UxQw7-RXcmDKocljFxk5SRxYrOU_lZZ942DOZfMSYZupkaHzf4CaFiQB0Zt8WWJotbS4Jaa6ti03_6uMXK6SNRyYlcBjgmJgVuNU_7Zc1_0Vu7xoMzoggT6EEOFPAYEWkO9gmvTwbkvlWAcF6yqMgFHQwa1SG1Q6-D_bftNIeVExAtIwnuUz7hB_ITFrdzaSE15ODRIbf8VsrmW6SE-iKz2Q81Eh6hcqZHKVeHlI77yuWCfzCdidraxqN6mHUF8NeaehewvnrF7J6OeqSvNbhuTR8CvP0pX350ExHQlbdAP026vIQfa2_0OouFVgDpG_9fnbhy_MJbyxd7sflet5xnsGQf_jCAfPck_a3qP1m0CpnPM48oRba8Y8Ih5DqxGNuixTjLpxyAOJ_YFtHMRHehMS5P_XFDLKV73RHFMjtvYqOsikih7_4UFhUH7d043qjRaTQiwWGFQaQBE5fDbTubLc43bSYABO1F-uuyoad0ldMuPlhd0VEU6QtiX7Vj6OskoRvTrb7ZM56g1_RHJon86jpg-Ldb2vQ10fDI7QhlCAwlDxVx6PcCGctVUFBXP15TffV8VT3SneuaT24MWl5nrNj9fyV2GmdkvhQUkYBA1EwbYGm899PPVt0mlOcoIw9VUc7DrJA_KcNe=w996-h732-s-no?authuser=0",
            description: "Lost city of the Incas",
        },
    ],
};
const countryFlags = {
    'Nepal': "🇳🇵",
    'India': "🇮🇳",
    'China': "🇨🇳",
    'Thailand': "🇹🇭",
    'Cambodia': "🇰🇭",
    'Malaysia': "🇲🇾",
    'Vietnam': "🇻🇳",
    "United States": "🇺🇸",
    'Morocco': "🇲🇦",
    'Iceland': "🇮🇸",
    "El Salvador": "🇸🇻",
    'Guatemala': "🇬🇹",
    'Nicaragua': "🇳🇮",
    'Colombia': "🇨🇴",
    'Peru': "🇵🇪",
    'Belgium': "🇧🇪",
    'France': "🇫🇷",
    "Netherlands": "🇳🇱",
    "United Kingdom": "🇬🇧",
    "Germany": "🇩🇪",
    "Poland": "🇵🇱",
    "Spain": "🇪🇸",
    "Portugal": "🇵🇹",
    "Italy": "🇮🇹",
    "Switzerland": "🇨🇭",
    "Hungary": "🇭🇺",
    "Slovakia": "🇸🇰",
    "Oman": "🇴🇲",
    "United Arab Emirates": "🇦🇪",
    "Qatar": "🇶🇦",
    "Honduras": "🇭🇳",
    "Mexico": "🇲🇽",
    "Liechtenstein": "🇱🇮",
    // Add regional flags for Indian states
    "Uttarakhand, India": "🇮🇳",
    "UP, India": "🇮🇳",
    "Karnataka, India": "🇮🇳",
    "Kerala, India": "🇮🇳",
    "Tamil Nadu, India": "🇮🇳",
    "Gujarat, India": "🇮🇳",
    "Maharastra, India": "🇮🇳",
    "Punjab, India": "🇮🇳",
    "Himachal Pradesh, India": "🇮🇳",
    // Add US state flags
    "Rhode Island, USA": "🇺🇸",
    "Georgia, USA": "🇺🇸",
    "South Carolina, USA": "🇺🇸",
};
function getCountryFlag(countryName) {
    // Try exact match first
    if (countryFlags[countryName]) {
        return countryFlags[countryName];
    }

    // Try to find a match for the main country name
    for (const [key, flag] of Object.entries(countryFlags)) {
        if (countryName.includes(key) || key.includes(countryName)) {
            return flag;
        }
    }

    return "🌍"; // Default world emoji if no flag found
}


// Create map instance using amCharts 4
am4core.ready(function() {
    // Themes
    am4core.useTheme(am4themes_animated);
    
    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series - default appearance for non-visited countries
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#f0f0f0"); // Very subtle color for non-visited
    polygonTemplate.stroke = am4core.color("#ffffff");
    polygonTemplate.strokeWidth = 0.5;
    
    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];
    
    // Prepare data for visited countries
    var visitedCountriesData = travelData.countries.map(country => ({
        id: country.id,
        name: country.name,
        fill: am4core.color(country.color)
    }));
    
    // Add data for visited countries
    polygonSeries.data = visitedCountriesData;
    
    // Bind "fill" property to "fill" key in data
    polygonTemplate.propertyFields.fill = "fill";
    
    // Create hover state for visited countries only
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#1b9bff");
    
    // Make only visited countries interactive
    polygonTemplate.adapter.add("cursorOverStyle", function(cursor, target) {
        if (target.dataItem && target.dataItem.dataContext && target.dataItem.dataContext.fill) {
            return "pointer";
        }
        return "default";
    });
    
    // Create image series for cities
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    
    // Create a circle image in image series template
    var imageSeriesTemplate = imageSeries.mapImages.template;
    var circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 6;
    circle.fill = am4core.color("#ff6b35");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{name}";
    
    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    
    // Add hover state for city markers
    var circleHoverState = circle.states.create("hover");
    circleHoverState.properties.radius = 8;
    circleHoverState.properties.fill = am4core.color("#ff4757");
    
    // Add data for cities
    imageSeries.data = travelData.cities;
    
    // Add click event to city markers
    imageSeriesTemplate.events.on("hit", function(ev) {
        var data = ev.target.dataItem.dataContext;
        showLocationInfo(data);
    });
    
    // Add click event to countries
    polygonTemplate.events.on("hit", function(ev) {
        var data = ev.target.dataItem.dataContext;
        if (data && data.fill) { // Only if it's a visited country
            var countryData = travelData.countries.find(c => c.id === data.id);
            if (countryData) {
                var citiesInCountry = travelData.cities.filter(city => city.country.includes(countryData.name));
                showCountryInfo(countryData, citiesInCountry);
            }
        }
    });
    
}); // end am4core.ready()

// Show city information
function showLocationInfo(cityData) {
    const panel = document.getElementById('info-panel');
    const image = document.getElementById('location-image');
    const name = document.getElementById('location-name');
    const country = document.getElementById('location-country');
    const description = document.getElementById('location-description');
    const date = document.getElementById('location-date');
    
    // Get country flag
    const flag = getCountryFlag(cityData.country);
    
    // Update panel content
    image.src = cityData.image;
    image.alt = cityData.name;
    name.textContent = cityData.name;
    country.textContent = `${flag} ${cityData.country}`;
    description.textContent = cityData.description;
    date.textContent = ""; // Remove date for now
    
    // Show panel
    panel.classList.remove('hidden');
}

// Show country information
function showCountryInfo(countryData, cities) {
    const panel = document.getElementById('info-panel');
    const image = document.getElementById('location-image');
    const name = document.getElementById('location-name');
    const country = document.getElementById('location-country');
    const description = document.getElementById('location-description');
    const date = document.getElementById('location-date');
    
    // Get country flag
    const flag = getCountryFlag(countryData.name);
    
    // Update panel content
    image.src = cities[0]?.image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    image.alt = countryData.name;
    name.textContent = `${flag} ${countryData.name}`;
    if (cities.length == 0) {
        country.textContent = "Visited this country";
        description.textContent = "No photos uploaded for this country yet.";
    } else {
        country.textContent = `Places visited: ${cities.map(c => c.name).join(', ')}`;
        description.textContent = `Explored ${cities.length} amazing ${cities.length === 1 ? 'place' : 'places'} in this incredible country.`;
    }
    date.textContent = "";
    
    // Show panel
    panel.classList.remove('hidden');
}

// Close panel functionality
document.getElementById('close-panel').addEventListener('click', () => {
    document.getElementById('info-panel').classList.add('hidden');
});

// Close panel when clicking outside
document.getElementById('info-panel').addEventListener('click', (e) => {
    if (e.target.id === 'info-panel') {
        document.getElementById('close-panel').click();
    }
});

// Close panel with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('info-panel').classList.add('hidden');
    }
});