(function($) {
 "use strict";
 
 var gApoint = 90.0;
 var gBpoint = 80.0;
 var gCpoint = 70.0;
 var gDpoint = 60.0;
 
var gHomeworksMaxpoint = 10.0;              
var gLabsMaxpoint = 10.0;
var gProjectMaxpoint = 20.0;
var gPresentationMaxpoint = 20.0;
var gMidtermMaxpoint = 20.0;
var gFinalMaxpoint = 20.0;

var gTotalMaxPoints = 100.0;
var gHomeworksPercentScale = 10.0;              
var gLabsPercentScale = 10.0;
var gProjectPercentScale = 20.0;
var gPresentationPercentScale = 20.0;
var gMidtermPercentScale = 20.0;
var gFinalPercentScale = 20.0;

 
 var computeGrade = function()
 {
   //variables for getting points for each category
   var homeworks = Number($('#Homeworks').val());
   var labs = Number($('#Labs').val());
   var project = Number($('#Project').val());
   var presentation = Number($('#Presentation').val());
   var midterm = Number($('#Midterm').val());
   var final = Number($('#Final').val());
   
   //variables for getting max points for each category
   var homeworksMaxPoints = Number($('#HomeworksMax').val());
   var labsMaxPoints = Number($('#LabsMax').val());
   var projectMaxPoints = Number($('#ProjectMax').val());
   var presentationMaxPoints = Number($('#PresentationMax').val());
   var midtermMaxPoints = Number($('#MidtermMax').val());
   var finalMaxPoints = Number($('#FinalMax').val());
   
   //variables to store the sum of points and calculate the current percentage
   var totalPoints = homeworks+labs+project+presentation+midterm+final;
   var maxPoints = homeworksMaxPoints+labsMaxPoints+projectMaxPoints+presentationMaxPoints+midtermMaxPoints+finalMaxPoints;
   var currentPercentage = (totalPoints/maxPoints)*100;
   
   
   var currentGrade = "NA";
 
    if (currentPercentage >= gApoint)
    {
        currentGrade = "A";
        $(smiley).attr('src', "img/A.png");
    }else if (currentPercentage >= gBpoint){
        currentGrade = "B";
        $(smiley).attr('src', "img/B.png");
    }else if (currentPercentage >= gCpoint){
         currentGrade = "C";
         $(smiley).attr('src', "img/C.png");
    }else if (currentPercentage >= gDpoint){
         currentGrade = "D";
         $(smiley).attr('src', "img/D.png");
    }else{
        currentGrade = "F";
        $(smiley).attr('src', "img/F.png");
    }
    $('#finalGrade').text(currentGrade);
    $('#totalPoints').text(totalPoints);
    $('#maxPoints').text(maxPoints);
    $('#finalPercentage').text(currentPercentage.toFixed(1) + "%");
    $('#computeGradeImage')
 };
 
 var saveSettings = function()
 {
    try {
        var aPoint = Number( $('#gradeA').val() );
        var bPoint = Number( $('#gradeB').val() );
        var cPoint = Number( $('#gradeC').val() );
        var dPoint = Number( $('#gradeD').val() );
 
        localStorage.setItem('gradeA', aPoint);
        localStorage.setItem('gradeB', bPoint);
        localStorage.setItem('gradeC', cPoint);
        localStorage.setItem('gradeD', dPoint);
       
        gApoint = aPoint;
        gBpoint = bPoint;
        gCpoint = cPoint;
        gDpoint = dPoint;
        $.mobile.pageContainer.pagecontainer('change', "#mainPage", {
         transition: 'none'
         });
    } catch (ex)
    {
        alert('Problem');
    }
 };
 
 var saveMaxSettings = function()
 {
    try {
      //Max points
        var HomeworksMaxPoint = Number( $('#HomeworksMax').val() );
        var LabsMaxPoint = Number( $('#LabsMax').val() );
        var ProjectMaxPoint = Number( $('#ProjectMax').val() );
        var PresentationMaxPoint = Number( $('#PresentationMax').val() );
        var MidtermMaxPoint = Number( $('#MidtermMax').val() );
        var FinalMaxPoint = Number( $('#FinalMax').val() );
        var totalMaxPoint = HomeworksMaxPoint+LabsMaxPoint+ProjectMaxPoint+PresentationMaxPoint+MidtermMaxPoint+FinalMaxPoint;
         
 
        localStorage.setItem('homeworksMax', HomeworksMaxPoint);
        localStorage.setItem('labsMax', LabsMaxPoint);
        localStorage.setItem('projectMax', ProjectMaxPoint);
        localStorage.setItem('presentationMax', PresentationMaxPoint);
        localStorage.setItem('midtermMax', MidtermMaxPoint);
        localStorage.setItem('finalMax', FinalMaxPoint);
        
       gHomeworksMaxpoint = HomeworksMaxPoint;              
       gLabsMaxpoint = LabsMaxPoint;
       gProjectMaxpoint = ProjectMaxPoint;
       gPresentationMaxpoint = PresentationMaxPoint;
       gMidtermMaxpoint = MidtermMaxPoint;
       gFinalMaxpoint = FinalMaxPoint;
       
       gTotalMaxPoints = totalMaxPoint;
       gHomeworksPercentScale = parseFloat((gHomeworksMaxpoint/totalMaxPoint)*100);              
       gLabsPercentScale = parseFloat((gLabsMaxpoint/totalMaxPoint)*100);
       gProjectPercentScale = parseFloat((gProjectMaxpoint/totalMaxPoint)*100);
       gPresentationPercentScale = parseFloat((gPresentationMaxpoint/totalMaxPoint)*100);
       gMidtermPercentScale = parseFloat((gMidtermMaxpoint/totalMaxPoint)*100);
       gFinalPercentScale = parseFloat((gFinalMaxpoint/totalMaxPoint)*100);
       
      $('#Homeworks').attr('max', gHomeworksMaxpoint) ;
      $('#Homeworks').slider("refresh");
      $('#Labs').attr('max', gLabsMaxpoint);
      $('#Labs').slider("refresh");
      $('#Project').attr('max', gProjectMaxpoint);
      $("#Project").slider("refresh");
      $('#Presentation').attr('max', gPresentationMaxpoint);
      $('#Presentation').slider("refresh");
      $('#Midterm').attr('max', gMidtermMaxpoint);
      $("#Midterm").slider("refresh");
      $('#Final').attr('max', gFinalMaxpoint);
      $("#Final").slider("refresh");
      
     
      $.mobile.pageContainer.pagecontainer('change', "#mainPage", {
         transition: 'none'
         });
    } catch (ex)
    {
        alert('Points must be a decimal value');
    }
 };

var toggleChange = function (){
    
      console.log($('#HWLab option:selected').val());
     
      var HWLab = $('#HWLab option:selected').val();
      var Project = $('#Project option:selected').val();
      var Exam = $('#Exam option:selected').val();

      if (HWLab == "on" || Project == "off" || Exam == "off"){
        gHomeworksPercentScale = 50;
        gLabsPercentScale = 50;
        gProjectPercentScale = 0;
        gPresentationPercentScale = 0;
        gMidtermPercentScale = 0;
        gFinalPercentScale = 0;
        
        console.log(HomeworksPercent);
        console.log(LabsPercent);
      }
      else if (HWLab == "on" || Project == "on" || Exam =="off"){
        gHomeworksPercentScale = 25;
        gLabsPercentScale = 25;
        gProjectPercentScale = 25;
        gPresentationPercentScale = 25;
        gMidtermPercentScale = 0;
        gFinalPercentScale = 0;
      }
      else if (HWLab == "on" || Project == "off" || Exam =="on"){
        gHomeworksPercentScale = 25;
        gLabsPercentScale = 25;
        gProjectPercentScale = 0;
        gPresentationPercentScale = 0;
        gMidtermPercentScale = 25;
        gFinalPercentScale = 25;
      }
      else if (HWLab == "off" || Project == "on" || Exam =="on"){
        gHomeworksPercentScale = 0;
        gLabsPercentScale = 0;
        gProjectPercentScale = 25;
        gPresentationPercentScale = 25;
        gMidtermPercentScale = 25;
        gFinalPercentScale = 25;
      }
      else if (HWLab == "off" || Project == "on" || Exam =="off"){
        gHomeworksPercentScale = 0;
        gLabsPercentScale = 0;
        gProjectPercentScale = 50;
        gPresentationPercentScale = 50;
        gMidtermPercentScale = 0;
        gFinalPercentScale = 0;
      }
      else if (HWLab == "off" || Project == "off" || Exam =="on"){
        gHomeworksPercentScale = 0;
        gLabsPercentScale = 0;
        gProjectPercentScale = 0;
        gPresentationPercentScale = 0;
        gMidtermPercentScale = 50;
        gFinalPercentScale = 50;
      }
      else {
        gHomeworksPercentScale = 20;
        gLabsPercentScale = 20;
        gProjectPercentScale = 20;
        gPresentationPercentScale = 20;
        gMidtermPercentScale = 10;
        gFinalPercentScale = 10;
      }      
}

 
 var savePercentSettings = function()
 {
    try {
        var TotalMaxPoints = Number( $('#TotalMaxPoints').val() );
        var HomeworksPercent = Number( $('#HomeworksPercent').val() );
        var LabsPercent = Number( $('#LabsPercent').val() );
        var ProjectPercent = Number( $('#ProjectPercent').val() );
        var PresentationPercent = Number( $('#PresentationPercent').val() );
        var MidtermPercent = Number( $('#MidtermPercent').val() );
        var FinalPercent = Number( $('#FinalPercent').val() );
        var TotalPercent = HomeworksPercent+LabsPercent+ProjectPercent+PresentationPercent+MidtermPercent+FinalPercent;
        
        
       if (TotalPercent != 100){
         alert('They must add up to 100%');
       }else {
       
       localStorage.setItem('totalMaxPoints', TotalMaxPoints);
        localStorage.setItem('homeworksPercent', HomeworksPercent);
        localStorage.setItem('labsPercent', LabsPercent);
        localStorage.setItem('projectPercent', ProjectPercent);
        localStorage.setItem('presentationPercent', PresentationPercent);
        localStorage.setItem('midtermPercent', MidtermPercent);
        localStorage.setItem('finalPercent', FinalPercent);
        
       gTotalMaxPoints = parseFloat(TotalMaxPoints); 
       gHomeworksPercentScale = parseFloat(HomeworksPercent);              
       gLabsPercentScale = parseFloat(LabsPercent);
       gProjectPercentScale = parseFloat(ProjectPercent);
       gPresentationPercentScale = parseFloat(PresentationPercent);
       gMidtermPercentScale = parseFloat(MidtermPercent);
       gFinalPercentScale = parseFloat(FinalPercent);
       
       gHomeworksMaxpoint = parseFloat(HomeworksPercent * TotalMaxPoints /100);              
       gLabsMaxpoint = parseFloat(LabsPercent * TotalMaxPoints / 100);
       gProjectMaxpoint = parseFloat(ProjectPercent * TotalMaxPoints / 100);
       gPresentationMaxpoint = parseFloat(PresentationPercent * TotalMaxPoints / 100);
       gMidtermMaxpoint = parseFloat(MidtermPercent * TotalMaxPoints /100);
       gFinalMaxpoint = parseFloat(FinalPercent * TotalMaxPoints /100);
        
       
      $('#Homeworks').attr('max', gHomeworksMaxpoint) ;
      $('#Homeworks').slider("refresh");
      $('#Labs').attr('max', gLabsMaxpoint);
      $('#Labs').slider("refresh");
      $('#Project').attr('max', gProjectMaxpoint);
      $("#Project").slider("refresh");
      $('#Presentation').attr('max', gPresentationMaxpoint);
      $('#Presentation').slider("refresh");
      $('#Midterm').attr('max', gMidtermMaxpoint);
      $("#Midterm").slider("refresh");
      $('#Final').attr('max', gFinalMaxpoint);
      $("#Final").slider("refresh");
       
       
      $.mobile.pageContainer.pagecontainer('change', "#mainPage", {
         transition: 'none'
         });
       }
    } catch (ex)
    {
        alert('Points must be a decimal value');
    }
 };

 var cancelSettings = function()
 {
    localStorage.clear();
 };

 var logout = function()
 {
    //logout of linkedin account
   IN.User.logout();
    
    //go back to login page after logging out
    $.mobile.pageContainer.pagecontainer('change', "#loginPage", {
         transition: 'none'
         });
 }
 
 var settingsPageSettings = function()
 {
   //$( "#tabs" ).tabs("option", "active", 0);
    //$( "#tabs" ).tabs("option", "select", 0);

 }
 
 $( document ).on( "change", function(){
                  $('#HWLab').on('change', toggleChange);
                  $('#Project').on('change', toggleChange);
                  $('#Exam').on('change', toggleChange);
 });
 // Setup the event handlers
 $( document ).on( "pageshow", function(){
                  
                  $('#computeGrade').on('click', computeGrade);
                  $('#saveSettings').on('click', saveSettings);
                  $('#cancelSettings').on('click', cancelSettings);
                  $('#saveMaxSettings').on('click', saveMaxSettings);
                  $('#savePercentSettings').on('click', savePercentSettings);
                  //$('#settingsPage').on('click', settingsPageSettings);
                  $('#logoutButton').on('click', logout);
                  
                  
                  //Start of grade cuttoff setting sliders event function                 
                  $('#gradeA').on( 'slidestop', function(e) {
                      var a = Number($('#gradeA').val());
                      var b = Number($('#gradeB').val());
                      
                     if (a < b) {
                        $('#gradeA').val(b+1);
                        $("#gradeA").slider("refresh");
                     }
                     });
                  
                  $('#gradeB').on( 'slidestop', function(e) {
                      var a = Number($('#gradeA').val());
                      var b = Number($('#gradeB').val());
                      var c = Number($('#gradeC').val());
                      
                     if (b > a) {
                        $('#gradeB').val(a-1);
                        $("#gradeB").slider("refresh");
                     }else if (b < c) {
                        $('#gradeB').val(c+1);
                        $("#gradeB").slider("refresh");
                     }
                     });
                  
                  $('#gradeC').on( 'slidestop', function(e) {
                      var b = Number($('#gradeB').val());
                      var c = Number($('#gradeC').val());
                      var d = Number($('#gradeD').val());
                     
                     if (c > b) {
                        $('#gradeC').val(b-1);
                        $("#gradeC").slider("refresh");
                     }else if (c < d) {
                        $('#gradeC').val(d+1);
                        $("#gradeC").slider("refresh");
                     }
                     });
                  
                   $('#gradeD').on( 'slidestop', function(e) {
                      var c = Number($('#gradeC').val());
                      var d = Number($('#gradeD').val());
                     
                    if (d > c) {
                        $('#gradeD').val(c-1);
                        $("#gradeD").slider("refresh");
                     }
                     });
                  //End of grade cuttoff event functions
               
                     
                  //Get Stored cuttoff values
                  var gradeCutOffSettingA = localStorage.getItem('gradeA');
                  var gradeCutOffSettingB = localStorage.getItem('gradeB');
                  var gradeCutOffSettingC = localStorage.getItem('gradeC');
                  var gradeCutOffSettingD = localStorage.getItem('gradeD');
                  
                  //Get Stored max point values
                  var gradeMaxSetting1 = localStorage.getItem('homeworksMax');
                  var gradeMaxSetting2 = localStorage.getItem('labsMax');
                  var gradeMaxSetting3 = localStorage.getItem('projectMax');
                  var gradeMaxSetting4 = localStorage.getItem('presentationMax');
                  var gradeMaxSetting5 = localStorage.getItem('midtermMax');
                  var gradeMaxSetting6 = localStorage.getItem('finalMax');
                  
                  // //Get Stored % scaling setting values
                   var totalMaxPoints = localStorage.getItem('totalMaxPoints');
                   var scalingSetting1 = localStorage.getItem('homeworksPercent');
                   var scalingSetting2 = localStorage.getItem('labsPercent');
                   var scalingSetting3 = localStorage.getItem('projectPercent');
                   var scalingSetting4 = localStorage.getItem('presentationPercent');
                   var scalingSetting5 = localStorage.getItem('midtermPercent');
                   var scalingSetting6 = localStorage.getItem('finalPercent');
                  
                  
                  //Sets stored cutoff percentage
                  if (gradeCutOffSettingA)
                  {
                     gApoint = Number(gradeCutOffSettingA);
                  }
                  if (gradeCutOffSettingB)
                  {
                     gBpoint = Number(gradeCutOffSettingB);
                  }
                  if (gradeCutOffSettingC)
                  {
                     gCpoint = Number(gradeCutOffSettingC);
                  }
                  if (gradeCutOffSettingD)
                  {
                     gDpoint = Number(gradeCutOffSettingD);
                  }
                 
                  //Sets stored max point for each category
                  if (gradeMaxSetting1)
                  {
                     gHomeworksMaxpoint = Number(gradeMaxSetting1);
                  }
                  if (gradeMaxSetting2)
                  {
                     gLabsMaxpoint = Number(gradeMaxSetting2);
                  }
                  if (gradeMaxSetting3)
                  {
                     gProjectMaxpoint = Number(gradeMaxSetting3);
                  }
                  if (gradeMaxSetting4)
                  {
                     gPresentationMaxpoint = Number(gradeMaxSetting4);
                  }
                  
                   if (gradeMaxSetting5)
                  {
                     gMidtermMaxpoint = Number(gradeMaxSetting5);
                  }
                  if (gradeMaxSetting6)
                  {
                     gFinalMaxpoint = Number(gradeMaxSetting6);
                  }
                  
                  
                  //Sets stored scaling valuesfor each category
                  if (totalMaxPoints)
                  {
                     gTotalMaxPoints = Number(totalMaxPoints);
                   }
                  if (scalingSetting1)
                  {
                      gHomeworksPercentScale = Number(scalingSetting1);
                   }
                   if (scalingSetting2)
                   {
                      gLabsPercentScale = Number(scalingSetting2);
                   }
                   if (scalingSetting3)
                   {
                      gProjectPercentScale = Number(scalingSetting3);
                   }
                   if (scalingSetting4)
                   {
                      gPresentationPercentScale = Number(scalingSetting4);
                   }
                  
                  //  if (scalingSetting5)
                  // {
                  //    gMidtermPercentScale = Number(scalingSetting5);
                  // }
                  // if (scalingSetting6)
                  // {
                  //    gFinalPercentScale = Number(scalingSetting6);
                  // }
               
                  //Sets value of setting to value
                     $('#gradeA').val(gApoint);
                     $('#gradeB').val(gBpoint);
                     $('#gradeC').val(gCpoint);
                     $('#gradeD').val(gDpoint);
                     
                  
                  //Sets value of Max setting to value
                     $('#HomeworksMax').val(gHomeworksMaxpoint);
                     $('#LabsMax').val(gLabsMaxpoint);
                     $('#ProjectMax').val(gProjectMaxpoint);
                     $('#PresentationMax').val(gPresentationMaxpoint);
                     $('#MidtermMax').val(gMidtermMaxpoint);
                     $('#FinalMax').val(gFinalMaxpoint);
                    
                  //Sets value of Percentage setting to value
                     $('#TotalMaxPoints').val(gTotalMaxPoints);
                     $('#HomeworksPercent').val(gHomeworksPercentScale);
                     $('#LabsPercent').val(gLabsPercentScale);
                     $('#ProjectPercent').val(gProjectPercentScale);
                     $('#PresentationPercent').val(gPresentationPercentScale);
                     $('#MidtermPercent').val(gMidtermPercentScale);
                     $('#FinalPercent').val(gFinalPercentScale);
                     
                     
               
                  });
 
 $( document ).on( "pagecreate", "#DefaultScalingFactors", function() {

      $( document ).on( "swipeleft swiperight", "#DefaultScalingFactors", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
          if ( e.type === "swipeleft" ) {
            $( "#CustomScalingFactors" ).panel( "open" );
          } else if ( e.type === "swiperight" ) {
            $( "#left-panel" ).panel( "open" );
          }
        }
      });
    });
    
 $( document ).on( "pagecreate", "#mainPage", function() {
    $( document ).on( "swipeleft swiperight", "#mainPage", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#gradeComputePanel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});
    
  ( function( $ ) {
function pageIsSelectmenuDialog( page ) {
    var isDialog = false,
        id = page && page.attr( "id" );
    $( ".filterable-select" ).each( function() {
        if ( $( this ).attr( "id" ) + "-dialog" === id ) {
            isDialog = true;
            return false;
        }
    });
    return isDialog;
}

$.mobile.document
    // Upon creation of the select menu, we want to make use of the fact that the ID of the
    // listview it generates starts with the ID of the select menu itself, plus the suffix "-menu".
    // We retrieve the listview and insert a search input before it.
    .on( "selectmenucreate", ".filterable-select", function( event ) {
        var input,
            selectmenu = $( event.target ),
            list = $( "#" + selectmenu.attr( "id" ) + "-menu" ),
            form = list.jqmData( "filter-form" );
        // We store the generated form in a variable attached to the popup so we avoid creating a
        // second form/input field when the listview is destroyed/rebuilt during a refresh.
        if ( !form ) {
            input = $( "<input data-type='search'></input>" );
            form = $( "<form></form>" ).append( input );
            input.textinput();
            list
                .before( form )
                .jqmData( "filter-form", form ) ;
            form.jqmData( "listview", list );
        }
        // Instantiate a filterable widget on the newly created selectmenu widget and indicate that
        // the generated input form element is to be used for the filtering.
        selectmenu
            .filterable({
                input: input,
                children: "> option[value]"
            })
            // Rebuild the custom select menu's list items to reflect the results of the filtering
            // done on the select menu.
            .on( "filterablefilter", function() {
                selectmenu.selectmenu( "refresh" );
            });
    })
    // The custom select list may show up as either a popup or a dialog, depending on how much
    // vertical room there is on the screen. If it shows up as a dialog, then the form containing
    // the filter input field must be transferred to the dialog so that the user can continue to
    // use it for filtering list items.
    .on( "pagecontainerbeforeshow", function( event, data ) {
        var listview, form;
        // We only handle the appearance of a dialog generated by a filterable selectmenu
        if ( !pageIsSelectmenuDialog( data.toPage ) ) {
            return;
        }
        listview = data.toPage.find( "ul" );
        form = listview.jqmData( "filter-form" );
        // Attach a reference to the listview as a data item to the dialog, because during the
        // pagecontainerhide handler below the selectmenu widget will already have returned the
        // listview to the popup, so we won't be able to find it inside the dialog with a selector.
        data.toPage.jqmData( "listview", listview );
        // Place the form before the listview in the dialog.
        listview.before( form );
    })
    // After the dialog is closed, the form containing the filter input is returned to the popup.
    .on( "pagecontainerhide", function( event, data ) {
        var listview, form;
        // We only handle the disappearance of a dialog generated by a filterable selectmenu
        if ( !pageIsSelectmenuDialog( data.toPage ) ) {
            return;
        }
        listview = data.prevPage.jqmData( "listview" ),
        form = listview.jqmData( "filter-form" );
        // Put the form back in the popup. It goes ahead of the listview.
        listview.before( form );
    });
})( jQuery );   


 // Load plugin
 $( document ).on( "deviceready", function(){
                  StatusBar.overlaysWebView( false );
                  StatusBar.backgroundColorByName("gray");
                  });
 }

 
 )(jQuery);
