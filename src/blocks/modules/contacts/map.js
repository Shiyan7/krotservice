document.addEventListener("DOMContentLoaded", () => {
    let center = [55.70508206902523,37.77475049999993];

    function init() {
        //eslint-disable-next-line
        let map = new ymaps.Map('map', {
            center: center,
            zoom: 17
        });

        //eslint-disable-next-line
        let placemark = new ymaps.Placemark(center, {
            balloonContent: null,
        }, {
            iconLayout: "default#image",
            iconImageHref: "data:image/svg+xml,%3Csvg width='44' height='64' viewBox='0 0 44 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28.1813 13.68C26.4323 12.2293 24.256 11.3919 21.9856 11.2962C19.7153 11.2004 17.4762 11.8516 15.6113 13.15C13.8519 14.3904 12.525 16.1505 11.8165 18.1832C11.1081 20.216 11.0537 22.4195 11.6609 24.4847C12.2682 26.55 13.5067 28.3733 15.2027 29.6991C16.8987 31.0248 18.9671 31.7864 21.1179 31.8771C23.2686 31.9678 25.3938 31.383 27.1954 30.2047C28.997 29.0265 30.3846 27.3138 31.1635 25.307C31.9425 23.3002 32.0737 21.1 31.5389 19.0148C31.0041 16.9296 29.83 15.0641 28.1813 13.68ZM25.8113 27.68C24.1924 28.773 22.2089 29.1864 20.2881 28.8313C18.3673 28.4761 16.6628 27.3808 15.5418 25.7811C14.4207 24.1815 13.9727 22.2055 14.2944 20.2788C14.616 18.3521 15.6814 16.6288 17.2613 15.48C18.6064 14.5455 20.2207 14.0776 21.857 14.1481C23.4934 14.2185 25.0615 14.8234 26.3213 15.87C27.1953 16.6052 27.8887 17.5313 28.3483 18.5768C28.8078 19.6224 29.0212 20.7595 28.9719 21.9005C28.9227 23.0415 28.6121 24.156 28.0641 25.158C27.5161 26.16 26.7454 27.0229 25.8113 27.68Z' fill='%234096FC'/%3E%3Cpath d='M21.55 55.51C17.36 50.08 2.81 30.62 2.81 21.58C2.92301 16.6914 4.94439 12.041 8.44182 8.62351C11.9392 5.206 16.6351 3.29264 21.525 3.29264C26.4149 3.29264 31.1108 5.206 34.6082 8.62351C38.1056 12.041 40.127 16.6914 40.24 21.58C40.1382 23.7317 39.654 25.8481 38.81 27.83L36.02 26.11C36.4296 24.8548 36.6652 23.5493 36.72 22.23C36.8676 18.7918 35.8411 15.4057 33.8091 12.6282C31.7771 9.85083 28.8606 7.8474 25.5391 6.94731C22.2175 6.04722 18.6885 6.30403 15.5322 7.67552C12.376 9.04701 9.78024 11.4516 8.17177 14.4939C6.56329 17.5363 6.03779 21.0353 6.68165 24.4159C7.32551 27.7965 9.10041 30.8575 11.7146 33.0956C14.3288 35.3337 17.6266 36.6158 21.0661 36.7311C24.5055 36.8464 27.8818 35.788 30.64 33.73C31.3025 33.2079 31.9181 32.6291 32.48 32L35.81 34.11C31.5888 41.5839 26.8225 48.7366 21.55 55.51Z' fill='%234096FC'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M38.28 35.62L41.28 29.36C42.3843 26.9059 43.0219 24.2676 43.16 21.58C43.16 15.8566 40.8864 10.3677 36.8394 6.32064C32.7923 2.2736 27.3034 0 21.58 0C15.8566 0 10.3677 2.2736 6.32064 6.32064C2.2736 10.3677 0 15.8566 0 21.58C0 29.58 9.36 43.72 15.43 52.08C10.19 52.82 5.34 54.62 5.34 57.83C5.31 62.07 13.73 64 21.55 64C29.37 64 37.81 62.07 37.81 57.83C37.81 54.62 32.96 52.83 27.72 52.08C31.5808 46.8196 35.1077 41.3221 38.28 35.62ZM21.55 61.13C30.24 61.13 34.92 58.83 34.92 57.83C34.92 57.18 32.17 55.36 25.74 54.74C24.2189 56.7769 23.1181 58.1718 22.7717 58.6108C22.7218 58.674 22.6876 58.7174 22.67 58.74C22.5341 58.9056 22.3631 59.039 22.1695 59.1307C21.9758 59.2223 21.7642 59.2699 21.55 59.27C21.3354 59.272 21.1231 59.2254 20.9291 59.1336C20.7352 59.0418 20.5645 58.9072 20.43 58.74C20.3893 58.6865 20.3032 58.5765 20.1763 58.4144C19.7106 57.8197 18.6959 56.5238 17.36 54.74C10.93 55.36 8.18 57.18 8.18 57.83C8.18 58.79 12.86 61.13 21.55 61.13ZM2.81 21.58C2.81 30.62 17.36 50.08 21.55 55.51C26.8225 48.7366 31.5888 41.5839 35.81 34.11L32.48 32C31.9181 32.6291 31.3025 33.2079 30.64 33.73C27.8818 35.788 24.5055 36.8464 21.0661 36.7311C17.6266 36.6158 14.3288 35.3337 11.7146 33.0956C9.10041 30.8575 7.32551 27.7965 6.68165 24.4159C6.03779 21.0353 6.56329 17.5363 8.17177 14.4939C9.78024 11.4516 12.376 9.04701 15.5322 7.67552C18.6885 6.30403 22.2175 6.04722 25.5391 6.94731C28.8606 7.8474 31.7771 9.85083 33.8091 12.6282C35.8411 15.4057 36.8676 18.7918 36.72 22.23C36.6652 23.5493 36.4296 24.8548 36.02 26.11L38.81 27.83C39.654 25.8481 40.1382 23.7317 40.24 21.58C40.127 16.6914 38.1056 12.041 34.6082 8.62351C31.1108 5.206 26.4149 3.29264 21.525 3.29264C16.6351 3.29264 11.9392 5.206 8.44182 8.62351C4.94439 12.041 2.92301 16.6914 2.81 21.58ZM30.7918 29.6615C32.6256 27.5598 33.69 24.8967 33.81 22.11C33.8871 20.2857 33.5575 18.4671 32.8449 16.7859C32.1323 15.1048 31.0546 13.6032 29.69 12.39C27.6039 10.5383 24.95 9.45134 22.1644 9.30767C19.3788 9.16399 16.6272 9.97217 14.3617 11.5994C12.0962 13.2266 10.4516 15.5761 9.69818 18.2618C8.94477 20.9474 9.12735 23.8095 10.2159 26.3776C11.3045 28.9458 13.2342 31.0672 15.6881 32.3934C18.142 33.7196 20.9741 34.1716 23.7189 33.6751C26.4636 33.1786 28.9579 31.7633 30.7918 29.6615Z' fill='%234096FC'/%3E%3C/svg%3E%0A",
            iconImageSize: [44, 44],
        });

        map.controls.remove("geolocationControl");
        map.controls.remove("searchControl");
        map.controls.remove("trafficControl");
        map.controls.remove("typeSelector");
        map.controls.remove("fullscreenControl");
        map.controls.remove("zoomControl");
        map.controls.remove("rulerControl");
        map.behaviors.disable(["scrollZoom"]);

        map.geoObjects.add(placemark);
    }

    window.ymaps?.ready(init);
});