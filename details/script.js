const order = localStorage.getItem("order")

if (order == "medium_pizza") {
    document.querySelector('.for_display_tovars').innerHTML=`<div class="for_medium_pizza MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 1 : Medium Pizza</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(0)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            Add Extra
                                            Options</p>
                                    </div>
                                    <div onclick="close_menus(0)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">Close</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_0">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 1</h2>
                                                    <p class="">Dough type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Italian Thin</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Hand Tossed</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+1.5₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Classic Edge</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">You Can Select The Material You Want
                                                        To Remove</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-price="+2.5₾"
                                                            class="for_vibor_0 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Corn</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Green Pepper</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Chicken</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Halapenio</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mushrooms</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Onions</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Fish</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Feta</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Cheddar</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ham</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Tomato</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Bacon</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Gorgonzola Cheese</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Black Olive</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ranch Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Honey Mustard Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Sweet Chilli Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Margherita</h2>
                                            <p>Pizza Sauce, Mozzarella, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Ham & Mushroom</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mexican</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni, Jalapeno, Green Peppers, Black
                                                Olives, Onions</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Greek</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Black Olives, Feta, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Delux</h2>
                                            <p>Pizza Sauce, Mozzarella, Mushroom, Pepperoni, Ham, Onion, Green Pepper
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Calypso</h2>
                                            <p>Pizza Sauce, Mozzarella, Tuna, Onion, Corn, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Honey Mustard Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Mushroom, Honey Mustard Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>American</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Grilled Chicken</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Green, Pepper, Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chicken BBQ</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Chicken, Onion, BBQ Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Veggie</h2>
                                            <p>Pizza Sauce, Onion, Green Pepper, Mozzarella, Black Olives, Mushroom,
                                                Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mix</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Bacon, Green Peppers, Onion</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Meat</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Ham, Beef Sausage</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Extravaganza</h2>
                                            <p>Pizza Sauce, Onion, Mozzarella, Beef Sausage, Pepperoni, Black Olives,
                                                Gr. Pepper, Mushroom, Ham, Corn</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Cheese</h2>
                                            <p>Pizza Sauce, Mozzarella, Feta, Cheddar, Gorgonzola</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Double Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Double Pepperon</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Domino's Pizza</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Bacon, Green Pepper, Tomato,
                                                Pepperoni, Onion</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Bacon & Chicken Ranch</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Tomato, Bacon, Ranch Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 2 : Medium Pizza</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(1)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            Add Extra
                                            Options</p>
                                    </div>
                                    <div onclick="close_menus(1)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">Close</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_1">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 1</h2>
                                                    <p class="">Dough type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Italian Thin</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Hand Tossed</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+1.5₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Classic Edge</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">You Can Select The Material You Want
                                                        To Remove</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-price="+2.5₾"
                                                            class="for_vibor_1 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Corn</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Green Pepper</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Chicken</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Halapenio</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mushrooms</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Onions</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Fish</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Feta</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Cheddar</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ham</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Tomato</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Bacon</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Gorgonzola Cheese</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Black Olive</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ranch Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Honey Mustard Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Sweet Chilli Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Margherita</h2>
                                            <p>Pizza Sauce, Mozzarella, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Ham & Mushroom</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mexican</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni, Jalapeno, Green Peppers, Black
                                                Olives, Onions</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Greek</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Black Olives, Feta, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Delux</h2>
                                            <p>Pizza Sauce, Mozzarella, Mushroom, Pepperoni, Ham, Onion, Green Pepper
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Calypso</h2>
                                            <p>Pizza Sauce, Mozzarella, Tuna, Onion, Corn, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Honey Mustard Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Mushroom, Honey Mustard Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>American</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Grilled Chicken</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Green, Pepper, Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chicken BBQ</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Chicken, Onion, BBQ Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Veggie</h2>
                                            <p>Pizza Sauce, Onion, Green Pepper, Mozzarella, Black Olives, Mushroom,
                                                Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mix</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Bacon, Green Peppers, Onion</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Meat</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Ham, Beef Sausage</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Extravaganza</h2>
                                            <p>Pizza Sauce, Onion, Mozzarella, Beef Sausage, Pepperoni, Black Olives,
                                                Gr. Pepper, Mushroom, Ham, Corn</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Cheese</h2>
                                            <p>Pizza Sauce, Mozzarella, Feta, Cheddar, Gorgonzola</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Double Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Double Pepperon</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Domino's Pizza</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Bacon, Green Pepper, Tomato,
                                                Pepperoni, Onion</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Bacon & Chicken Ranch</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Tomato, Bacon, Ranch Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}else if(order == "bread_souce"){
document.querySelector(".for_display_tovars").innerHTML=`<div class="for_bread_souce MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 1 : Bread</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese-Bread-Bacon-&-Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread (classic)</h2>
                                            <p>Mozzarella and Cheddar</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Ham.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Ham</h2>
                                            <p>Mozzarella, cheddar, ham</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Bacon_&_Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Bacon & Jalapenio</h2>
                                            <p>Mozzarella, cheddar, bacon and jalapeno</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 2 : Bread</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese-Bread-Bacon-&-Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread (classic)</h2>
                                            <p>Mozzarella and Cheddar</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Ham.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Ham</h2>
                                            <p>Mozzarella, cheddar, ham</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/Cheese_Bread_Bacon_&_Jalapeno.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheese Bread Bacon & Jalapenio</h2>
                                            <p>Mozzarella, cheddar, bacon and jalapeno</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="2"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 3 : Souce</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_2">
                                    <img id="bonus_img_2"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_2">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(2)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(2)" class="select_choose" id="select_choose_2">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_2">
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319105853125_cheddarsauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Cheddar Sauce XL 80gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319110127170_chipotlesauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chipotle Sauce XL 80gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}else if(order == "large_pizza"){
    document.querySelector(".for_display_tovars").innerHTML=` <div class="for_large_pizza MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 1 : Large Pizza</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(0)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            Add Extra
                                            Options</p>
                                    </div>
                                    <div onclick="close_menus(0)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">Close</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_0">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 1</h2>
                                                    <p class="">Dough type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Italian Thin</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Hand Tossed</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+2₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Classic Edge</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">You Can Select The Material You Want
                                                        To Remove</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-price="+2.5₾"
                                                            class="for_vibor_0 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Corn</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Green Pepper</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Chicken</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Halapenio</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mushrooms</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Onions</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Fish</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Feta</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Cheddar</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ham</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Tomato</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Bacon</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-price="+3₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Gorgonzola Cheese</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-price="+2.5₾"
                                                            class="for_vibor_0  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Black Olive</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ranch Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Honey Mustard Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Sweet Chilli Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Delux</h2>
                                            <p>Pizza Sauce, Mozzarella, Mushroom, Pepperoni, Ham, Onion, Green Pepper
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Calypso</h2>
                                            <p>Pizza Sauce, Mozzarella, Tuna, Onion, Corn, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Margherita</h2>
                                            <p>Pizza Sauce, Mozzarella, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Ham & Mushroom</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mexican</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni, Jalapeno, Green Peppers, Black
                                                Olives, Onions</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Greek</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Black Olives, Feta, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>American</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chicken BBQ</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Chicken, Onion, BBQ Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Veggie</h2>
                                            <p>Pizza Sauce, Onion, Green Pepper, Mozzarella, Black Olives, Mushroom,
                                                Corn</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mix</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Bacon, Green Peppers, Onion</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Meat</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Ham, Beef Sausage</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Extravaganza</h2>
                                            <p>Pizza Sauce, Onion, Mozzarella, Beef Sausage, Pepperoni, Black Olives,
                                                Gr. Pepper, Mushroom, Ham, Corn</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+4.00₾</div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Honey Mustard Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Mushroom, Honey Mustard Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Grilled Chicken</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Green, Pepper, Corn</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Double Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Double Pepperon</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Domino's Pizza</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Bacon, Green Pepper, Tomato,
                                                Pepperoni, Onion</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Bacon & Chicken Ranch</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Tomato, Bacon, Ranch Sauce</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Cheese</h2>
                                            <p>Pizza Sauce, Mozzarella, Feta, Cheddar, Gorgonzola</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 2 : Large Pizza</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            <div class="pizza_extra">
                                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                    <div onclick="select_in_menU(1)" style="flex: 1 1 0%; padding: 10px;">
                                        <p class="" style="color: rgb(0, 120, 174); font-size: 16px; cursor: pointer;">
                                            Add Extra
                                            Options</p>
                                    </div>
                                    <div onclick="close_menus(1)" class="close_menu"
                                        style=" align-items: flex-start; cursor: pointer; padding-top: 20px;">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            data-testid="CloseIcon" style="color: rgb(232, 0, 69);">
                                            <path
                                                d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                            </path>
                                        </svg><span style="margin-left: 5px; color: rgb(232, 0, 69);">Close</span>
                                    </div>
                                </div>
                                <div class="ingredient_cart">
                                <div style="padding: 5px 0px 30px 20px;font-weight: 300;" id="ingredient_cards_1">
                                    </div>
                                </div><div class="ingradients_menu">
                                <div style="padding-bottom: 20px;" class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 1</h2>
                                                    <p class="">Dough type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor  vibor_active">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/thin-dough.webp"
                                                                            alt="Italian Thin"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; ">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Italian Thin</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-xl-3 css-6yx547">
                                                            <div class="for_vibor">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px; align-items: center;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/classic-dough.webp"
                                                                            alt="Hand Tossed"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between;">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Hand Tossed</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+2₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Step 2</h2>
                                                    <p class="">Edge Type</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 22px;">
                                                        <div
                                                            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.7 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3 css-f3bvu0">
                                                            <div
                                                                style="position: relative; border: 2px solid rgb(0, 119, 205); border-radius: 11px; padding: 8px; margin-top: 8px; cursor: pointer;">
                                                                <div style="position: absolute; right: 10px;"> <svg
                                                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-caiwz"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                                <div
                                                                    style="display: flex; justify-content: center; padding-block: 12px;">
                                                                    <div><img
                                                                            src="https://dominosge.s3.eu-central-1.amazonaws.com/Classic.webp"
                                                                            alt="Classic Edge"
                                                                            style="width: 95px; height: 45px;"></div>
                                                                </div>
                                                                <div
                                                                    style="display: flex; justify-content: space-between; color: rgb(0, 0, 0);">
                                                                    <p class=" fs-12" style="font-weight: 600;">
                                                                        Classic Edge</p><span class=" fs-12"
                                                                        style="font-weight: 600;">+0₾</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Standard Ingredients</h2>
                                                    <p class=" capitalize">You Can Select The Material You Want
                                                        To Remove</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div
                                                            class="for_vibor_2 for_active_2 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Extra Ingredients</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="Corn" data-price="+2.5₾"
                                                            class="for_vibor_1 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a"  >
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cornpng_parspng_com_8.webp"
                                                                        alt="Corn" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Corn</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                            </div>
                                                            <div style="position: absolute; top: 6px; right: 6px;"><svg
                                                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                    focusable="false" aria-hidden="true"
                                                                    viewBox="0 0 24 24" data-testid="CheckCircleIcon">
                                                                    <path
                                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                    </path>
                                                                </svg></div>
                                                        </div>
                                                        <div data-title="Green Pepper" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/green pepper.png"
                                                                        alt="Green Pepper" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Green Pepper</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Chicken" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Chicken_topping.webp"
                                                                        alt="Chicken" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Chicken</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Halapenio" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/jalapeno.png"
                                                                        alt="Halapenio" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Halapenio</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pepperoni" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/Pepperoni_t.png"
                                                                        alt="Pepperoni" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pepperoni</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mushrooms" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mushroom.png"
                                                                        alt="Mushrooms" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mushrooms</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Onions" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/spanish-onion.webp"
                                                                        alt="Onions" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Onions</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Pizza Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/pizza_sauce.webp"
                                                                        alt="Pizza Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Pizza Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Fish" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tuna_t.png"
                                                                        alt="Fish" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Fish</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Feta" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/feta.webp"
                                                                        alt="Feta" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Feta</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Mozzarella" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/mozarella.webp"
                                                                        alt="Mozzarella" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Mozzarella</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Cheddar" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/cheddar.webp"
                                                                        alt="Cheddar" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Cheddar</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ham" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ham.webp"
                                                                        alt="Ham" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ham</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Tomato" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/tomato.png"
                                                                        alt="Tomato" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Tomato</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Bacon" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/beef.webp"
                                                                        alt="Bacon" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Bacon</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Gorgonzola Cheese" data-price="+3₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/gorgonzola.webp"
                                                                        alt="Gorgonzola Cheese" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Gorgonzola Cheese</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        3₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Black Olive" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/black olives.png"
                                                                        alt="Black Olive" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Black Olive</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="MuiBox-root css-1hnm6b6">
                                        <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
                                            <div
                                                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 css-1ak9ift">
                                                <div
                                                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-1eh9dqr">
                                                    <h2 class="text-blue fs-24 ">Sauce</h2>
                                                    <p class="">You Can Select The Material You Want To Add</p>
                                                    <div
                                                        style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 22px;">
                                                        <div data-title="BBQ Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/BBQ.webp"
                                                                        alt="BBQ Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        BBQ Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Ranch Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/ranch.webp"
                                                                        alt="Ranch Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Ranch Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Honey Mustard Sauce" data-price="+2.5₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224344209_009.webp"
                                                                        alt="Honey Mustard Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Honey Mustard Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2.5₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div data-title="Sweet Chilli Sauce" data-price="+2₾"
                                                            class="for_vibor_1  MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3.8 MuiGrid-grid-md-1.8 css-1d1l40a">
                                                            <div
                                                                style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 10px;">
                                                                <div style="flex-grow: 0.3;"><img
                                                                        src="https://dominosge.s3.eu-central-1.amazonaws.com/20240831224920676_pizzasauce.webp"
                                                                        alt="Sweet Chilli Sauce" loading="lazy"
                                                                        style="width: 95px; height: 70px; object-fit: contain;">
                                                                </div>
                                                                <div>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center;">
                                                                        Sweet Chilli Sauce</p>
                                                                    <p class=" fs-12"
                                                                        style="color: rgb(73, 73, 73); text-align: center; padding-bottom: 3px;">
                                                                        2₾</p>
                                                                </div>
                                                                <div style="position: absolute; top: 6px; right: 6px;">
                                                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-15uwkbs"
                                                                        focusable="false" aria-hidden="true"
                                                                        viewBox="0 0 24 24"
                                                                        data-testid="CheckCircleIcon">
                                                                        <path
                                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Delux</h2>
                                            <p>Pizza Sauce, Mozzarella, Mushroom, Pepperoni, Ham, Onion, Green Pepper
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Calypso</h2>
                                            <p>Pizza Sauce, Mozzarella, Tuna, Onion, Corn, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Margherita</h2>
                                            <p>Pizza Sauce, Mozzarella, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Ham & Mushroom</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mexican</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni, Jalapeno, Green Peppers, Black
                                                Olives, Onions</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Greek</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Black Olives, Feta, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>American</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chicken BBQ</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Chicken, Onion, BBQ Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Veggie</h2>
                                            <p>Pizza Sauce, Onion, Green Pepper, Mozzarella, Black Olives, Mushroom,
                                                Corn</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mix</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Bacon, Green Peppers, Onion</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Meat</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Ham, Beef Sausage</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Extravaganza</h2>
                                            <p>Pizza Sauce, Onion, Mozzarella, Beef Sausage, Pepperoni, Black Olives,
                                                Gr. Pepper, Mushroom, Ham, Corn</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+4.00₾</div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Honey Mustard Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Mushroom, Honey Mustard Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Grilled Chicken</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Green, Pepper, Corn</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Double Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Double Pepperon</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Domino's Pizza</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Bacon, Green Pepper, Tomato,
                                                Pepperoni, Onion</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Bacon & Chicken Ranch</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Tomato, Bacon, Ranch Sauce</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Cheese</h2>
                                            <p>Pizza Sauce, Mozzarella, Feta, Cheddar, Gorgonzola</p>
                                        </div>
                                        <div class="for_red_count">+6.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`
}else if(order == "garlic_bread_souce"){
    document.querySelector(".for_display_tovars").innerHTML=`<div class="for_garlic_souce MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 1 : Bread</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <p style="color: rgb(73, 73, 73);">No options</p>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 2 : Bread</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            

                            <div class="bonus_cards" id="bonus_cards_1">
                                <p style="color: rgb(73, 73, 73);">No options</p>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="2"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 3 : Souce</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_2">
                                    <img id="bonus_img_2"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_2">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(2)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(2)" class="select_choose" id="select_choose_2">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_2">
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319110018170_yogurtsauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Yogurt Sauce 25gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://dominosge.s3.eu-central-1.amazonaws.com/20250319110232362_hotsauce.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Hot Sauce 30gr</h2>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}else if(order == "mega_week"){
    document.querySelector(".for_display_tovars").innerHTML=`<div class="for_mega_week MuiGrid-root MuiGrid-container css-1d3bbye for_selects_cards">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="0"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 1 : Medium Pizza</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_0">
                                    <img id="bonus_img_0"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_0">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(0)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(0)" class="select_choose" id="select_choose_0">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_0">
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Margherita</h2>
                                            <p>Pizza Sauce, Mozzarella, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Ham & Mushroom</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mexican</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni, Jalapeno, Green Peppers, Black
                                                Olives, Onions</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Greek</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Black Olives, Feta, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Delux</h2>
                                            <p>Pizza Sauce, Mozzarella, Mushroom, Pepperoni, Ham, Onion, Green Pepper
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Calypso</h2>
                                            <p>Pizza Sauce, Mozzarella, Tuna, Onion, Corn, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Honey Mustard Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Mushroom, Honey Mustard Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>American</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Grilled Chicken</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Green, Pepper, Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chicken BBQ</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Chicken, Onion, BBQ Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Veggie</h2>
                                            <p>Pizza Sauce, Onion, Green Pepper, Mozzarella, Black Olives, Mushroom,
                                                Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mix</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Bacon, Green Peppers, Onion</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Meat</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Ham, Beef Sausage</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Extravaganza</h2>
                                            <p>Pizza Sauce, Onion, Mozzarella, Beef Sausage, Pepperoni, Black Olives,
                                                Gr. Pepper, Mushroom, Ham, Corn</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Cheese</h2>
                                            <p>Pizza Sauce, Mozzarella, Feta, Cheddar, Gorgonzola</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Double Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Double Pepperon</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Domino's Pizza</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Bacon, Green Pepper, Tomato,
                                                Pepperoni, Onion</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Bacon & Chicken Ranch</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Tomato, Bacon, Ranch Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="1"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 2 : Medium Pizza</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_1">
                                    <img id="bonus_img_1"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_1">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(1)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(1)" class="select_choose" id="select_choose_1">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>
                            

                            <div class="bonus_cards" id="bonus_cards_1">
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Margherita</h2>
                                            <p>Pizza Sauce, Mozzarella, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Ham & Mushroom</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mexican</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni, Jalapeno, Green Peppers, Black
                                                Olives, Onions</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Greek</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Black Olives, Feta, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Delux</h2>
                                            <p>Pizza Sauce, Mozzarella, Mushroom, Pepperoni, Ham, Onion, Green Pepper
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Calypso</h2>
                                            <p>Pizza Sauce, Mozzarella, Tuna, Onion, Corn, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Honey Mustard Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Mushroom, Honey Mustard Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>American</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Grilled Chicken</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Green, Pepper, Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chicken BBQ</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Chicken, Onion, BBQ Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Veggie</h2>
                                            <p>Pizza Sauce, Onion, Green Pepper, Mozzarella, Black Olives, Mushroom,
                                                Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mix</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Bacon, Green Peppers, Onion</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Meat</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Ham, Beef Sausage</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Extravaganza</h2>
                                            <p>Pizza Sauce, Onion, Mozzarella, Beef Sausage, Pepperoni, Black Olives,
                                                Gr. Pepper, Mushroom, Ham, Corn</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Cheese</h2>
                                            <p>Pizza Sauce, Mozzarella, Feta, Cheddar, Gorgonzola</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Double Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Double Pepperon</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Domino's Pizza</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Bacon, Green Pepper, Tomato,
                                                Pepperoni, Onion</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Bacon & Chicken Ranch</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Tomato, Bacon, Ranch Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0 for_selects_card pizza-block" data-id="2"
                        style="margin-top: 35px;">
                        <div class="jss47" style="height: auto; transition: 1s;">
                            <p class="jss48 product-title" style="padding-bottom: 0px;">Product 3 : Medium Pizza</p>
                            <div style="width: 100%; padding: 20px; position: relative;">
                                <div class="bonus_card" id="selected_card_2">
                                    <img id="bonus_img_2"
                                        src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts" id="bonus_texts_2">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                        <div onclick="close_choose(2)">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                data-testid="EditIcon" style="cursor: pointer;">
                                                <path
                                                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="select_choose(2)" class="select_choose" id="select_choose_2">
                                    <p>choose</p>
                                    <i class='bx bx-chevron-down'></i>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div style="flex: 1 1 0%; padding: 0px;"> </div>
                                </div>
                                <div style="padding: 0px;"></div>
                            </div>

                            <div class="bonus_cards" id="bonus_cards_2">
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/margherita_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Margherita</h2>
                                            <p>Pizza Sauce, Mozzarella, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mushroom_&_ham_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Ham & Mushroom</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mexican_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mexican</h2>
                                            <p>Pizza Sauce, Mozzarella, Pepperoni, Jalapeno, Green Peppers, Black
                                                Olives, Onions</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/greek_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Greek</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Black Olives, Feta, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/deluxe_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Delux</h2>
                                            <p>Pizza Sauce, Mozzarella, Mushroom, Pepperoni, Ham, Onion, Green Pepper
                                            </p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/calipso_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Calypso</h2>
                                            <p>Pizza Sauce, Mozzarella, Tuna, Onion, Corn, Tomato</p>
                                        </div>
                                        <div class="for_red_count"></div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20250620091628501_chilli.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Sweet Chilli Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Green Pepper, Onion, Sweet Chilli Sauce
                                            </p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/20240831212119268_HoneyMusterChicken.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Honey Mustard Chicken</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Mushroom, Honey Mustard Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/american_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>American</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Mushrooms</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/grilled_chicken.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Grilled Chicken</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Green, Pepper, Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/chicken_BBQ.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Chicken BBQ</h2>
                                            <p>Pizza Sauce, Mozzarella, Green Pepper, Chicken, Onion, BBQ Sauce</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/veggie_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Veggie</h2>
                                            <p>Pizza Sauce, Onion, Green Pepper, Mozzarella, Black Olives, Mushroom,
                                                Corn</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/mix_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Mix</h2>
                                            <p>Pizza Sauce, Mozzarella, Ham, Bacon, Green Peppers, Onion</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4meat_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Meat</h2>
                                            <p>Pizza sauce, Mozzarella, Pepperoni, Bacon, Ham, Beef Sausage</p>
                                        </div>
                                        <div class="for_red_count">+3.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/extravaganza_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Extravaganza</h2>
                                            <p>Pizza Sauce, Onion, Mozzarella, Beef Sausage, Pepperoni, Black Olives,
                                                Gr. Pepper, Mushroom, Ham, Corn</p>
                                        </div>
                                    </div>
                                    <div class="for_red_count">+3.00₾</div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/4cheese_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>4 Cheese</h2>
                                            <p>Pizza Sauce, Mozzarella, Feta, Cheddar, Gorgonzola</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/double_pepperoni_global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Double Pepperoni</h2>
                                            <p>Pizza Sauce, Mozzarella, Double Pepperon</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/domino_s_pizza_Global.webp" alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Domino's Pizza</h2>
                                            <p>Pizza Sauce, Chicken, Mozzarella, Mushroom, Bacon, Green Pepper, Tomato,
                                                Pepperoni, Onion</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                                <div class="bonus_card">
                                    <img src="https://deykvccewcmn1.cloudfront.net/bacon_&_ranch_sauce_global.webp"
                                        alt="">
                                    <div class="for_flex">
                                        <div class="bonus_texts">
                                            <h2>Bacon & Chicken Ranch</h2>
                                            <p>Pizza Sauce, Mozzarella, Chicken, Tomato, Bacon, Ranch Sauce</p>
                                        </div>
                                        <div class="for_red_count">+4.00₾</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
}else if(order == ""){
    document.querySelector(".for_display_tovars").innerHTML=``
}else if(order == ""){
    document.querySelector(".for_display_tovars").innerHTML=``
}