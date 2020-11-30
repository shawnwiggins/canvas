/*EvaluationKIT START*/
var evalkit_jshosted = document.createElement('script');
    evalkit_jshosted.setAttribute('type', 'text/javascript');
    evalkit_jshosted.setAttribute('src', 'https://ccsf.evaluationkit.com/CanvasScripts/ccsf.js?v=3');
    document.getElementsByTagName('head')[0].appendChild(evalkit_jshosted);
/*EvaluationKIT END*/

////////////////////////////////////////////////////
// BEGIN KATEX CONFIG                             //
////////////////////////////////////////////////////
(function() {
    var katexCSS = document.createElement('link');
        katexCSS.rel = "stylesheet";
        katexCSS.href = "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css";
        katexCSS.integrity = "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X";
        katexCSS.crossorigin = "anonymous";
    var katexScript = document.createElement('script');
        katexScript.defer = true;
        katexScript.src = "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js";
        katexScript.integrity = "sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4";
        katexScript.crossorigin = "anonymous";
    var katexRenderScript = document.createElement('script');
        katexRenderScript.defer = true;
        katexRenderScript.src = "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js";
        katexRenderScript.integrity = "sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa";
        katexRenderScript.crossorigin = "anonymous";
        katexRenderScript.onload = "renderMathInElement(document.body);";
    document.body.appendChild(katexCSS);
    document.body.appendChild(katexScript);
    document.body.appendChild(katexRenderScript);
}) ();
////////////////////////////////////////////////////
// END KATEX CONFIG                               //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// DESIGN TOOLS CONFIG                            //
////////////////////////////////////////////////////
// Copyright (C) 2017  Utah State University
var DT_variables = {​​​​​​​​
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '25688',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: false,
    	 // OPTIONAL: Limit by course format
	     limitByFormat: false, // Change to true to limit by format
	     // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	     formatArray: [
            'online',
            'blended'
        ],
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'student',
            'teacher',
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: false, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '1234',
            '987654'
        ]
}​​​​​​​​;
// Run the necessary code when a page loads
$(document).ready(function () {​​​​​​​​
    'use strict';
    // This runs code that looks at each page and determines what controls to create
    $.getScript(DT_variables.path + 'js/master_controls.js', function () {​​​​​​​​
        console.log('master_controls.js loaded');
    }​​​​​​​​);
}​​​​​​​​);
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Begin Pronto                                   //
////////////////////////////////////////////////////
(function() {​​​​​​​​
		var script = document.createElement('script');
		script.src = `https://chat.trypronto.com/js/embedded.js?cb=${​​​​​​​​Math.round(new Date().getTime() / 1000)}​​​​​​​​`;
		document.body.appendChild(script);
    }​​​​​​​​)();
////////////////////////////////////////////////////
// End Pronto                                   //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Begin Global Nav Virtual Campus CONFIG         //
////////////////////////////////////////////////////
var styleAdded = false;  
    function addMenuItem(linkText, linkhref, icon, target) {​​​​​​​​ 
        var iconHtml = '',  
            itemHtml,  
            linkId = linkText.split(' ').join('_'),  
            iconCSS = '<style type="text/css">' +  
                '   i.custom_menu_list_icon:before {​​​​​​​​' +  
                '       font-size: 27px;' +  
                '       width: 27px;' +  
                '       line-height: 27px;' +  
                '   }​​​​​​​​' +  
                '   i.custom_menu_list_icon {​​​​​​​​' +  
                '       width: 27px;' +  
                '       height: 27px;' +  
                '   }​​​​​​​​' +  
                '   body.primary-nav-expanded .menu-item__text.custom-menu-item__text {​​​​​​​​' +  
                '       white-space: normal;' +  
                '       padding: 0 2px;' +  
                '   }​​​​​​​​' +  
                '</style>';  
        if (icon !== '') {​​​​​​​​  
            // If it is a Canvas icon  
            if (icon.indexOf('icon') === 0) {​​​​​​​​  
                iconHtml = '<div class="menu-item-icon-container" role="presentation"><i class="' + icon + ' custom_menu_list_icon"></i></div>';  
            // for an svg or other image  
            }​​​​​​​​ else if (icon !== '') {​​​​​​​​  
                iconHtml = '<div class="menu-item-icon-container" role="presentation">' + icon + '</div>';  
            }​​​​​​​​  
        }​​​​​​​​  
        // Build item html  
        itemHtml = '<li class="ic-app-header__menu-list-item ">' +  
                '   <a id="global_nav_' + linkId + '" href="' + linkhref + '" class="ic-app-header__menu-list-link">' + iconHtml +  
                '       <div class="menu-item__text custom-menu-item__text">' + linkText + '</div>' +  
                '   </a>' +  
                '</li>';  
        $('#menu .ic-app-header__menu-list-item').last().before(itemHtml);  
        // Add some custom css to the head the first time  
        if (!styleAdded) {​​​​​​​​  
            $('head').append(iconCSS);  
            styleAdded = true;  
        }​​​​​​​​  
            
    }​​​​​​​​ 
$(document).ready(function() {​​​​​​​​
    addMenuItem('Student Support','https://sites.google.com/mail.ccsf.edu/virtualcampus', '<img class="ic-icon-svg" src="https://online.ccsf.edu/wp-content/uploads/virtualcampus.svg">', '_blank');
;
}​​​​​​​​);
////////////////////////////////////////////////////
// END Global Nav Virtual Campus CONFIG           //
////////////////////////////////////////////////////