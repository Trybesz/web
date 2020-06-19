import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, input, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {
    display: block;
}

/* HACK: ie11 https://stackoverflow.com/questions/42173213/ie-11-image-doesnt-scale-down-correctly-within-flexbox in particular, this is to eliminate extra whitespace at the end of feed if it contains activities with images
*/
*::-ms-backdrop,
* {
    flex-shrink: 0;
}

* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
}

@font-face {
    font-family: 'AvenirNextRoundedW01-Re';
    src: url('../anr.eot?#iefix');
    src: url('../anr.eot?#iefix') format('eot'),
    url('../anr.woff2') format('woff2'),
    url('../anr.woff') format('woff'),
    url('../anr.ttf') format('truetype'),
    url('../anr.svg') format('svg');
}

:focus {
    outline: none;
}

ol, ul {
    list-style: none;
}

input::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.placeholder};
}

input:-ms-input-placeholder {
    color: ${({ theme }) => theme.color.placeholder};
}

input::-moz-placeholder {
    color: ${({ theme }) => theme.color.placeholder};
    opacity: 1;
}

textarea::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.placeholder};
}

textarea:-ms-input-placeholder {
    color: ${({ theme }) => theme.color.placeholder};
}

textarea::-moz-placeholder {
    color: ${({ theme }) => theme.color.placeholder};
    opacity: 1;
}

input[type=search] {
    -webkit-appearance: none;
}

input:focus {
    outline-width: 0;
}

input:invalid {
    box-shadow: none;
}

input[type='submit']:focus {
    outline: none;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button {
    display: none;
}

input,
input[type='text'],
textarea,
input[type='password'],
input[type='email'],
input[type='tel'] {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    outline: none;
}

input[type='submit'] {
    -webkit-appearance: none;
    outline: none;
}

video {
    outline: none;
}

html {
    color: #000;
    background: ${({ theme }) => theme.color.background};
}

body {
    color: ${({ theme }) => theme.color.text};
    font-size: 10px;
    line-height: 1;
    overflow-x: hidden;
    -webkit-touch-callout: none;
    overscroll-behavior-y: contain;
}

body,
input,
textarea,
::placeholder {
    font-family: Helvetica, Arial, sans-serif;
}

div[tabindex='-1']:focus {
    outline: 0;
}

a {
    cursor: pointer;
    text-decoration: none;
}

button {
    outline: none;
}

// Modal

.modal-html-open {
    overflow: hidden;
}

.ReactModal__Overlay--before-close {
    opacity: 0;
}

@media only screen and (max-width: 899px) {
    body:before {
        background-color: ${({ theme }) => theme.color.modal};
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
        transition: opacity 0.6s ease-in-out;
        visibility: hidden;
        z-index: 999;
    }

    body.modal-body-open:before {
        opacity: 1;
        position: fixed;
        visibility: visible;
    }
}

.modal-overlay {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;

    @media only screen and (min-width: 900px) {
        overflow-y: auto;
    }

    @media only screen and (min-width: 900px) {
        :before {
            background-color: ${({ theme }) => theme.color.modal};
            content: '';
            height: 100%;
            left: 0;
            opacity: 0;
            position: fixed;
            top: 0;
            width: 100%;
            transition: all 0.4s cubic-bezier( .19, 1, .22, 1);
        }

        &.modal-no-anim:before {
            transition-duration: 0s;
        }
    }

    &.ReactModal__Overlay--after-open .modal-area {
        transform: translate3d(0, 0, 0);
    }

    &.modal-warning {
        z-index: 1001;
    }

    &.modal-warning .modal-close {
        display: none;
    }

    @media only screen and (min-width: 900px) {
        &.modal-gif-search {
            overflow-y: hidden;
        }
    }
}

.ReactModal__Overlay--after-open.modal-overlay:before {
    opacity: 1;
}

.modal-create .modal-area {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
}

.modal-repost .modal-area {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
}

.modal-gif-search .modal-area {
    padding-left: 10px;
    padding-right: 10px;
}

@media only screen and (min-width: 900px) {
    .modal-gif-search .modal-area {
        padding-bottom: 12px;
        padding-left: 12px;
        padding-right: 3px;
    }
}

.modal-link-search .modal-area {
    padding-left: 0;
    padding-right: 0;
}

.modal-social-search .modal-area {
    padding-left: 10px;
    padding-right: 10px;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes modal-slide-down-from-top {
    from {
        bottom: 500px;
    }

    to {
        bottom: 0;
    }
}

.rfu-loading-indicator__spinner {
    border-color: #fff #fff rgba(255, 255, 255, 0) !important;
    border-top-color: ${({ theme }) => theme.color.teal} !important;
    height: 30px !important;
    width: 30px !important;
}

.rta {
    font-size: 16px !important;
    line-height: 0;
}

.rta__textarea {
    line-height: 1.5;
}

.rta__autocomplete {
    margin-top: 28px !important;
    z-index: 9999;

    @media only screen and (max-width: 600px) {
        left: 0 !important;
        right: 0 !important;
        margin-left: auto;
        margin-right: auto;
        max-width: 280px;
    }

}

.rta--loading .rta__autocomplete {
    display: none !important;
}

.rta__list {
    background: ${({ theme }) => theme.color.background} !important;
    border: none !important;
    border-radius: 4px !important;
    box-shadow: ${({ theme }) =>
        theme.type === 'light'
            ? '0 1px 2px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.8) !important'
            : '1px 0 0 #333, -1px 0 0 #333, 0 -1px 0 #333, 0 2px 1px #333 !important'};
    overflow: hidden;
}

.rta__entity {
    background: none !important;
}

.rta__item:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey} !important;
}

.rta__item {
    transition: 0.1s all ease-in-out;
}

.no-touch .rta__item:hover,
.rta__entity--selected {
    background-color: ${({ theme }) => theme.color.faintGrey} !important;
}

// RC Slider

.rc-slider {
    border-radius: 6px;
    box-sizing: border-box;
    height: 14px;
    padding: 5px 0;
    position: relative;
    touch-action: none;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.rc-slider-rail {
    background-color: #e9e9e9;
    border-radius: 6px;
    height: 4px;
    position: absolute;
    width: 100%;
}

.rc-slider-track {
    background-color: ${({ theme }) => theme.color.teal};
    border-radius: 6px;
    height: 4px;
    left: 0;
    position: absolute;
}

.rc-slider-handle {
    background-color: ${({ theme }) => theme.color.background};
    border: solid 4px ${({ theme }) => theme.color.teal};
    border-radius: 50%;
    cursor: pointer;
    cursor: grab;
    height: 18px;
    margin-left: -9px;
    margin-top: -7px;
    position: absolute;
    width: 18px;
    touch-action: pan-x;
}

.rc-slider-handle:focus {
    border-color: ${({ theme }) => theme.color.teal};
    box-shadow: 0 0 0 5px rgb(133, 207, 200, 0.7);
    outline: none;
}

.rc-slider-handle-click-focused:focus {
    border-color: ${({ theme }) => theme.color.teal};
    box-shadow: unset;
}

.rc-slider-handle:hover {
    border-color: ${({ theme }) => theme.color.teal};
}

.rc-slider-handle:active {
    border-color: ${({ theme }) => theme.color.teal};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.teal};
    cursor: grabbing;
}

.rc-slider-mark {
    font-size: 12px;
    left: 0;
    position: absolute;
    top: 18px;
    width: 100%;
}

.rc-slider-mark-text {
    color: #999;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    text-align: center;
    vertical-align: middle;
}

.rc-slider-mark-text-active {
    color: #666;
}

.rc-slider-step {
    background: transparent;
    height: 4px;
    position: absolute;
    width: 100%;
}

.rc-slider-dot {
    background-color: #fff;
    border: 2px solid #e9e9e9;
    border-radius: 50%;
    bottom: -2px;
    cursor: pointer;
    height: 8px;
    margin-left: -4px;
    position: absolute;
    vertical-align: middle;
    width: 8px;
}

.rc-slider-dot-active {
    border-color: ${({ theme }) => theme.color.teal};
}

.rc-slider-disabled {
    background-color: #e9e9e9;
}

.rc-slider-disabled .rc-slider-track {
    background-color: #ccc;
}

.rc-slider-disabled .rc-slider-handle,
.rc-slider-disabled .rc-slider-dot {
    background-color: #fff;
    border-color: #ccc;
    box-shadow: none;
    cursor: not-allowed;
}

.rc-slider-disabled .rc-slider-mark-text,
.rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
}

.rc-slider-vertical {
    height: 100%;
    padding: 0 5px;
    width: 14px;
}

.rc-slider-vertical .rc-slider-rail {
    height: 100%;
    width: 4px;
}

.rc-slider-vertical .rc-slider-track {
    bottom: 0;
    left: 5px;
    width: 4px;
}

.rc-slider-vertical .rc-slider-handle {
    margin-left: -5px;
    margin-bottom: -7px;
    touch-action: pan-y;
}

.rc-slider-vertical .rc-slider-mark {
    height: 100%;
    left: 18px;
    top: 0;
}

.rc-slider-vertical .rc-slider-step {
    height: 100%;
    width: 4px;
}

.rc-slider-vertical .rc-slider-dot {
    left: 2px;
    margin-bottom: -4px;
}

.rc-slider-vertical .rc-slider-dot:first-child {
    margin-bottom: -4px;
}

.rc-slider-vertical .rc-slider-dot:last-child {
    margin-bottom: -4px;
}

// stream: notifications

.raf-avatar-group__avatar:first-of-type {
    margin: 0 -15px 0 0;
}

.raf-avatar-group__avatar {
    display: inline-block;
    padding: 0;
    margin: 0 -15px;
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
}

.raf-avatar-group__avatar:hover {
    margin-right: 0;
}

.raf-avatar-group__avatar:last-of-type:hover {
    margin: 0 -15px;
}
`;
