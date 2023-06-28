// import "styles/calendar.css"
// import "styles/common.css"
// import "styles/content.css"
// import "styles/layout.css"

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { useEffect } from 'react';
import '../styles/calendar.css';
import '../styles/common.css';
import '../styles/content.css';
import '../styles/layout.css';
import $ from 'jquery';
import Head from 'next/head';
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: {session, ...pageProps} }) {
    // jquery
    useEffect(() => {
        $(function () {
            //gnb 설정

            popupInit();
            gnbInit();
        });

        function popupInit() {
            //alert  닫기팝업
            $('.alert_popup .btn_close').on('click', function () {
                $('#alert_mask')
                    .stop(true, true)
                    .animate({ opacity: 0 }, 200, function () {
                        $(this).hide();
                        // $(".t_btn").removeClass('on');
                    });
                $('.alert_popup:visible').stop(true, true).fadeOut(200);
                return false;
            });
        }

        /*아코디언메뉴*/
        $('.notice_listc').click(function () {
            $('.notice_content').slideUp();
            if ($(this).children('.notice_content').is(':hidden')) {
                $(this).children('.notice_content').slideDown();
            } else {
                $(this).children('.notice_content').slideUp();
            }
        });

        /*페이지 탑메뉴*/
        function gnbInit() {
            $('.page_navs .page_bsub').hover(
                function () {
                    $(this)
                        .children('.psub_menu')
                        .stop(true, true)
                        .slideDown(200);
                },
                function () {
                    $(this)
                        .children('.psub_menu')
                        .stop(true, true)
                        .slideUp(200);
                },
            );

            /*모바일*/
            $('.page_navs .page_ssub').hover(
                function () {
                    $(this)
                        .children('.psub_menub')
                        .stop(true, true)
                        .slideDown(200);
                },
                function () {
                    $(this)
                        .children('.psub_menub')
                        .stop(true, true)
                        .slideUp(200);
                },
            );

            /*모바일*/
            $('.page_navs .page_bsub').on('click', function () {
                $('.psub_menu').toggleClass('active_1');
            });
        }

        // var resizeTimeout;

        // clearTimeout(resizeTimeout);
        // resizeTimeout = setTimeout(function () {
        //     $(window)
        //         .resize(function () {
        //             if ($(window).width() > 993) {
        //                 $('.nav-menu').addClass('gnbn');
        //                 $('.nav-menu .gnb > li').addClass('gnb_memu');
        //                 $('.nav-menu').removeClass('mobile_gnb');
        //                 $('.nav-menu .gnb > li').removeClass('moblie_nav');
        //             } else {
        //                 $('.nav-menu').removeClass('gnbn');
        //                 $('.nav-menu .gnb > li').removeClass('gnb_memu');
        //                 $('.nav-menu').addClass('mobile_gnb');
        //                 $('.nav-menu .gnb > li').addClass('moblie_nav');
        //             }
        //             if ($(window).width() > 993) {
        //                 $('.gnbn > ul> li > a').on(
        //                     'mouseover focus',
        //                     function () {
        //                         $(this)
        //                             .parent()
        //                             .addClass('active')
        //                             .siblings()
        //                             .removeClass('active');
        //                         return false;
        //                     },
        //                 );

        //                 $('.gnbn li li > a').on('mouseover focus', function () {
        //                     $(this)
        //                         .parent()
        //                         .addClass('active_sub')
        //                         .siblings()
        //                         .removeClass('active_sub');
        //                     return false;
        //                 });

        //                 if ($('.nav-menu.gnbn').is(':hidden')) {
        //                     $(this).css('display', 'block');
        //                 } else {
        //                 }
        //             } else {
        //                 if ($('.nav-menu.gnbn').is(':hidden')) {
        //                     $(this).css('display', 'block');
        //                 } else {
        //                 }
        //                 // 햄버거메뉴
        //                 $('.menu-trigger').on('click', function () {
        //                     if ($('.mobile_gnb').is(':hidden')) {
        //                         $('.mobile_gnb').stop(true, true).fadeIn(200);
        //                         $('.menu-trigger').addClass('active-1');

        //                         $('.moblie_nav').click(function () {
        //                             $(this).children('.inner').slideUp();
        //                             if (
        //                                 $(this).children('.inner').is(':hidden')
        //                             ) {
        //                                 $(this).children('.inner').slideDown();
        //                             } else {
        //                                 $(this).children('.inner').slideUp();
        //                             }
        //                         });
        //                     } else {
        //                         $('.mobile_gnb').stop(true, true).fadeOut(200);
        //                         $('.menu-trigger').removeClass('active-1');
        //                     }
        //                     return false;
        //                 });

        //                 // return false;
        //             }
        //         })
        //         .resize();
        // }, 10);
    }, [pageProps]);

    // 팝업창
    function alert_show(target) {
        $('#alert_mask')
            .css('opacity', 0)
            .show()
            .stop(true, true)
            .animate({ opacity: 0.8 }, 200);
        $('.alert_popup.' + target)
            .stop(true, true)
            .fadeIn(200)
            .find('.input')
            .val('');
        // $(".t_btn").addClass('on');
    }

    return (
        <>
            <SessionProvider session={session}>
                <Component {...pageProps} alert_show={alert_show} />
            </SessionProvider>
        </>
    );
}
