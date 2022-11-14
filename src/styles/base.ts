import { createGlobalStyle } from "styled-components";

const GlobalBase = createGlobalStyle`
:root {
    --color-white-0: rgba(255, 255, 255, 1);
    --color-black-0: rgba(0, 0, 0, 0.6);

    --color-grey-0: rgba(154,154,154,1);
    --color-grey-1: rgba(96,96,96,1);
    --color-grey-2: rgba(47,47,47,1);
    --color-grey-3: rgba(37, 38, 38, 1);
    --color-grey-4: rgba(29,29,29,1);

    --color-grey-3-modal: rgba(37,38,38,0.6);

    --color-red-0: rgba(203, 0, 0, 1);
    --button-grad-red: 102.18deg, rgba(211, 0, 0, 0.83) 30.17%, rgba(73, 0, 0, 0) 135.52%;

    --box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    
    --font-base: 'Roboto', sans-serif;
}

`;
export default GlobalBase;
