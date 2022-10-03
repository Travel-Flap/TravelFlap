import React from 'react';
import './Banner.css';

export const Banner = () => {
    return (
        <div className='bannerdiv'>
            <div className="maincarddiv card text-bg-dark">
                <img src="images/TravelImage1.jpg" className="card-img" alt="..." />
                <div className="banner_text card-img-overlay">
                    <h1 className="card-title">OUR OFFERS</h1>
                    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p> */}
                </div>
            </div>

            {/* This is for the services Section */}

                {/* <div className='services'>
                    <div>
                    
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAiCAYAAABWQVnHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAddJREFUeNrslr8vQ1EUx/ueNn5GylBpKEGIySARi1EiFiwWkyYSkTQG/4DFxCCYGCpdbYjB2MEiEomQlA6VCCHS0FSEqj7fk3xfcl23rcHYm3xy7zv3nPPOvbfve2s5juNR2+dO6BDdKKjy/G5ZMOYL3x67Bq/BaRikwbKSpAB6QAT4VWdTghsQAuPAos1RAt/LJRBnG9RpCaqVcckEfeAI65zQ9iaI7h7UqnbbkCCnO7G1miowJfAopZf1tYvsQc5gf2af+bEHWFsTj8tisOxLI+027V+gkzHtmLty7VYu2iYbEzS8Ma9s8htPRW9pL4Pj4EApVSpaB49gH8yDNXAu1QEfkAoXpQIpew7Htq0d2wl/VBEm8sMno/kk3E0MGMqrAQ2gi8/dWrAcq7fYMf65VRJUElQS/HOCJ8PcB3ilJkhLqZPQhjtRLVeyRvB9P/D7zzO4g7dRhD6z8Emir+ftJIoUEEXKMrCUJjpFpP5FltAPrqmFg2CSkxuglzfVgIgQtVPGq/SZsbGWFB0TGJ+CPU42Y5wEIuEXFNIYns/QL7l3hFvilggr1riiaN+uUmqBVUbhIy+bpv3Scv9gYCKKLsyJBbxpUxPRFnRS3RBPbQo+8W8BBgBRDoqlmPKLAQAAAABJRU5ErkJggg==" alt="" />
                        <p>HOTELS</p>
                    </div>
                    <div>
                        
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAATCAYAAAAao7T0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArBJREFUeNrElktIlFEUx52vb2YwezBMWFFT2UsTQdpUmxa1EHoxi6KVCEb0wBZBCW5atAiLwDZFIWREFBHVokUvMSICQSgILGkRFb3ADKdpMGe0qf+J/5XD4ZvBBqULPw733Md37rnnnvOFcl2Ly1TbDZJgJhgGC8AMNf4FeGC+0mXBVxAH5Uo/xLFFIAR+gY/gMegGgzIp3PxhYoFPKRY9BUvLpr/tpbwBmsGIG/B48n4akuQp9nM8zr5DPPDc6NZz7jajfwDGjS4GcuANbyE1dilRo405B+YCUd6hfhZlJOBknumHjSw0T1qGe57gN8URAzAo7haIF/rA64CNomYzd0LdIv9gjDvkGpAGC9l/ohf0mEVpykGjz4Mxo/tGOWz02QBjUpTf1f6bQS28s0MC+DeoAit5aumv4OR14JPSixdmm7n1nFsL3it9jPpVypg5lEvUHi8ZW8dCeNop3t//bm/FMxW8s8sqHsZJ1MTIKPtRc3U5xozLSeKZo6Aa7DMfHWVKcbci7AINTtkLuqb4pElexcVikyTpIV7EoK0u6cWmwe0VAS/PtkYYsgdyOfjpF5no8Smmp9DAcl5lhv0E2MhvjXgFFrWzlsgTfAZWl/hxXdeuMfX/YHKV+teOa5JYOy4H902ukHYWtICbEuGglc8vwmCbbMuo3COloQGcZ/45zERbp3OUr4LNRXkLS8Qhjp0Bn1ltH03SEDF6A+Omg4Y0gSscfwjuyqNBzLyD3P43vSPPSPGbZzbbxI9P5ACwrIRryqssHzHZ23p5yGe29bgwzP+QThbOPD0khhwEVwvUnGLGJHjN18FO6jsppeIPMLbyfsBr2QLuMYCzTHDi0gslBvEr0AZO0hvOW6clboJ+rnS7D9aCI6AS3FInKbWdAi/AAXpfEuFtO+mPAAMAl1Sjj46bwD0AAAAASUVORK5CYII=" alt="" />
                        <p>CAR RENTALS</p>
                    </div>

                    <div>
                    

                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAUCAYAAAAOTSQ2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv9JREFUeNq8lntozWEYx3+7uCwbiyRtI2w0U3OXfySlJtcyYpOINSXlkpTLNvdCioYQo4jmVi4jaStRLrn8Rc0ik41oM5cxM/N56nvW6df5nXN2sr316fm973kv3/d53+d5T1Rra6sTqDSXpPTBnIZE+AMpMFg/34Yt8MgJUbosfedEWqK8xEngKsxBVRvgIfSFUWorh/XwNBJxzD8IMxUmQAK8hTLGVIQUpwmyMDfhJQxX81AogoWq34ICeByOOObMxmyGTI9ln0B2dBjetYVnQrq81xsqIUciL0CWjrgMRntsMhqWQZ3GmLDzMA36yXMZsBHG2EbD8ZzvcwZcg3pNUuvXLV2eyFH9BmyT4DhYDTvAnNEMW6EYrzZ4rFmFGdIecY48eFUCU6HO1T1Dxztf9bswSd+fTDCCioOslYs5ABaMm9orzso8KIUP8tiXAMNG6E7OhRrYgKgzXseNyYPtCjYr+fQ/Fok4R4tehPcKkq8ewwewSLXHvPGYtVCo4/5rm4AjjPlhfWIjTEGXYJyi0yJrCgTKGdUBRCVh1sEaNX22I4QTiGrx7xvrGphm6YVOlWEItMT8S3fvOoyHpiAnMExe8qWfVzruK0GTMAMzlUxz1f4A9mvRn64xi2CnHRk0KklfViJuCbDGRAVJlur3TCSiykO+EL9PJtsTtVj1sxADC/z6HIXjuluHIV7tlhr2Brlvlvl3wVjVbaMFiHoW9vOFOBNyDqoYmKYjSJSH8hV5vtKoozkUwKO+kqtITVXdNraHuasielsRs4TvEsthTDLbdVdGYlbAa1vEY56usFye6qW2fQbzfYz04Y/W+3dKRzYLMYWuPs8lLpCwRGX7JnmzmyIxQXc4YmFt4iRwpS52EQLzQoxLViav12WvVSKNUyB9d/5Dcee5nn65x10GwmS9ENPV9kKeK3U6oLS9EHgrCvMNeuh/mz3Q3aE/JLnGVei5qei0P5sItAjbDXP8vGoR+gbuwx3ZmnAX6JB/wgiNsefE4211OkPcPwEGAB8kDyxkzrO4AAAAAElFTkSuQmCC" alt="" />
                        <p>FLIGHTS</p>
                    </div>

                    <div>
                        

                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAfCAYAAABplKSyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+JJREFUeNq0l31MlVUcx+9NkqGujYq5NhBraa2oLSsRV5bZLDfnBGNhwQI36w/H2lSmgP0hRa2VscqtWUt8AyvUFaQWNe0VFuBSKJShli+NhU6TXuUG9Pm1L+x0uZf7cC+d7bPz3POc5znf53d+L+f6BwYGfNG0QGWKl2kz4WW4F7pgM6yzG1cWnBmaFOeLrU2FNLgdkuB7qIfTkAfb4A/YAvkSNazFKmIa1OnaTOrX9XcSVwnLNJYLF0K95IoYRXwCv8sC9q5kKJKAnx0Bgx/c/3+IsDYfboWH4Sf5wFVwlzPHLNQHS2WxanwqaSxFNEAj7IcpGvsVzgbNmyu/eFdiuhGS8a/CMYiOfO39UXgE2j2+4j3IhpRYLVEgAdvhFo8C4uE2+FG/62OJjusV92vhRWd8EvwW5plNkKlwDugDvogLYean6G6CkySUjSOIWO34VRVcC1dDjiMiOcg3/BLwEO+uHxoM9glE9DkOexHuVmhly5Qn4EttRTGMh0uQ6CxkbRW8ZA4IL8Crliih13wHEbtHEmEPfQxPQ4e+MLhlKUnZwuc0thdmwTVOtrR2Xu/4HO7XR3QjImNYiLL4dHhd5kphkmW3B/TQCn7bFzYr630AfzsCfLo2i62UgGegRWnc8sh98Kes0TMsbbP4cro3NfYpvKMi00Z3o+bkamvmMd4fooBthSdgA7wCz8EEbdnjkABfwwx4/z8ieFmmBGzh5QURouEyVPDMIvpTQfe/glZ4G17TWIt6C0n7oDuVURvdB/29m5PNye6ROXdZrAdHBYuOZ6xX1+2DWwZ/RQhjs2KnileVeyO4lGdJ6WIohEOwkcWusxBjsvnBHH4XyVEDcrQH4cMIIrocK4ZtQ9HBIokKJ8sRCxVS1hYhpI77g2Fk6flbeBaOeUhq9lyFHDasJXxOvbccUQ3pcEDRUYuA5xUNj/FwzShOVp4KpXvzrJKRCbiZxeZp4cNQIsGHR5na49X3eBVxXGGWhIAOx1I1Sj6tjHeOUsRk9T+MNCnO2aM2lWW3NUEp9ybS74iiyKWpb456r2jrLeGw/zOirLQ5zpkzOhFYYJ9Oy3uiFJGnmuKLxRI+nR1TsUZZ0Hi6UnSD8scR2AmP6v4C9cWRFvB0vENAqWqBHV4+UpqfptudqpQJ8oE4pfdxOnEtC2Pl0Z22eaBcGXUNHFQJz9VZYjrMhjtUIc1Cn0lMQsxJJEwKfgtRSaoFgRDzmrSFC+WYdWMigu1IpfsGyhDwpEfR5pA3SEyJpzwRodUOWgNBhTK7l2Yb/wuU61DbFZUIFk1WUbM/NG9EEaY9OlcuseocasI/AgwAab8x/ype8iYAAAAASUVORK5CYII=" alt="" />
                        <p>TRIPS</p>
                    </div>

                    <div>
                    

                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAYAAADlep81AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoBJREFUeNq0lk1IVUEUx+/1K1+GVlBhGW5qUxDUQkIigshdCLVokRVCUCBBq8hcJJEfLaJFERT0gdnGoJXLaCcFRUULF0ERhRS56ZWpqfX6HfhfGKd73/c78OPgmXHmP3POnPvCTCYTJNnivc3mauEqbIQ1GpqDabgM75P+v7b7c1Co1eQxpw7ORBqjveRHswkqxqrymLMgf0XijL2KzQdltnwELXre7Ld8utyCwhw1dAPXCS0KTcuvc24vrYP5hwthCk5RSxMlC0LMKtxPWIIRbbBWG5t/ByuhHqphU8wyO2ESQdvLkbJO+dVwH5phBczCHngETYp9g10xdME2DtdeDkFH4ZdIeakw+5trcW7moV7haNEp4zS2+W2dzuw5zMB35xCWnh9OUVerT/lmxb9bL/MtfIU7CB0rpA8dk5iX8Am26oa2yH+RgHpnLIoFSmODs96kDmRzd0AHjBVyQx9xGzhFSrcVbTQj3+CkLVsstlOzpm3Yx9hgzhtisr2aVjin0Kwz3AM33Q2x03DLi12ES86a9iKPq/gtzX9gQJ+lqHXM6VBpP2VR3VyXP6CaCVVLfuyZYh3623jliLG0flAaI1uSH4i5oJPhwt2WVhWsXeUbPfNm1YjfiZu8mAlojJnXqHUm1FTb1beqtE+gm7J9n8I+OEgax2v0jTok5akKfKPa2OhFQvO9JjEnTExUQxfgiBR3w3qdMFPKJ0l9ajyLmCHcWTjPnJFlr4zBfhVjisF57/dQ0Zb0e4h1e3H2yoaZ0/tfpybYr2qfCipsiOmSmAe+mGV9iIn7cU+cYgsroCfUr87HiDmcszEiqk9PuK7EGkoSY2u+RkxP0qR/AgwA4kbPzKfE8BsAAAAASUVORK5CYII=" alt="" />
                        <p>CRUISES</p>
                    </div>

                    <div>
                    

                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAy9JREFUeNq8l0tsTVEUhntpkxKlEc+oCPWKNh4Rb6MWNTAV0oiqR0zadGBSpIpSTBAiYtJ6RBoMJIKgNSCEqBioR1WpBGlD00Y8Si+9vtX8V3Zvbntue/Xu5Ms6Z51z9n/22muvs48vEAjEBZu/fHxcNC0h931YP/3OwNwAE3gKWdzbNCCunxvCgzGPYRDshJlQjT+p38VphRIey2hLsamQAttjIZ4F3xD+ral5K/+KWIi/hCFh/K/iYyC+D3KY4zPY/VAmf0m/j5ww12M2wXobLSyBVfhrYxF2ewEb7Vqdzuf8mh3ERFzto2xT0BFL8aGyw4KOcAlnmbkAkiAgemo2gD9gS+h5b94m3qlE1skp2BxFNfuAyWVOqyIW5yGruc8UGiuBpxUBn+ipBTR6K5slUEl/xbzAXk9xbkzEvoFfMBxaYQTU9baYIHiB/nZzvAfr5/yA13xV2mqAkRJ+B59gYB+XlYkfhlJeINVLfClk89BP7EWYYHUXOqJY19swNv9nHXeDbF2XOefmCt5yGYerLWGgKpo1RV+ZmB+wmONjGsgkXS7H12zWXWpW9p4o2aJtGfYJ1XF+yLVs2Xu+9rKUzmxl9IH/uZOhr6OYAnw+JxoW0TR8L9wKN70XIxoX4b0m1ujOhmxbaHndEWGHt6Eogjm36UyHk457jmyzK24JsY4HJnr0uUt2SwSF57rsIce3Ab4T8q//xDkpwNarNmd201ln4dBm4LNID7dZhPMcLrdPKH23O6V7NhwJV9utNN5VQliBuQNftDwynB1JkSJlW6MavfB9MBHbHi/SvTlW7Ryd47JdKp4vZN9uH/w8mAuJGuEtha8mZKD52qGkaRCW6pfhIMKNTp9jlHgn8Of1JO6VS2tUMC5F+tNAn1ayfVxL7vaT6tGmwSNnQ9AC8xT27jJ+lJ5Jdqpbr8UtWR6C7bun6oNjfyAPYHQY0cmajkJFyYpKQ1/FF+rtLaFey2c5UavO/cGlh3CC89w52Ipwm+dOpofWKjtLWR4Uj9Pc+xWdDt1bDVcRbYl4G+Xxx3ETKmCKwl4MV5SAnn+p0YhbW6kwBrdG5bAx2k/fXwEGAJUOBO3xFs2MAAAAAElFTkSuQmCC" alt="" />
                        <p>ACTIVITIES</p>
                    </div>

                </div> */}
        </div>
    )
}
