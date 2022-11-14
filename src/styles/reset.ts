import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`
::-webkit-scrollbar {
  width: 14px;
  background: transparent;
}
::-webkit-scrollbar {
  height: 14px;
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 14px 14px var(--color-grey-2);
  border: solid 4px transparent;
  border-radius: 14px;
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 14px 14px var(--color-grey-1);
}
::-webkit-scrollbar-track {
  display: none;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input,textarea {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
    text-decoration: none;
}

::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-grey-0);
}

label{
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-white-0);
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    font-family: var(--font-base);
	background-color: var(--color-grey-4);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
	cursor: pointer;
}
`;

export default GlobalReset;
