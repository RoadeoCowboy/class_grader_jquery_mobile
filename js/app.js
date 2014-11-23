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
    }else if (currentPercentage >= gBpoint){
        currentGrade = "B";
    }else if (currentPercentage >= gCpoint){
         currentGrade = "C";
    }else if (currentPercentage >= gDpoint){
         currentGrade = "D";
    }else{
        currentGrade = "F";
    }
    $('#finalGrade').text(currentGrade);
    $('#totalPoints').text(totalPoints);
    $('#maxPoints').text(maxPoints);
    $('#finalPercentage').text(currentPercentage);
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
        window.history.back();
    } catch (ex)
    {
        alert('Points must be a decimal value');
    }
 };
 
 var saveMaxSettings = function()
 {
    try {
        var HomeworksMaxPoint = Number( $('#HomeworksMax').val() );
        var LabsMaxPoint = Number( $('#LabsMax').val() );
        var ProjectMaxPoint = Number( $('#ProjectMax').val() );
        var PresentationMaxPoint = Number( $('#PresentationMax').val() );
        var MidtermMaxPoint = Number( $('#MidtermMax').val() );
        var FinalMaxPoint = Number( $('#FinalMax').val() );
 
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
        
        window.history.back();
    } catch (ex)
    {
        alert('Points must be a decimal value');
    }
 };

 var cancelSettings = function()
 {
    localStorage.clear();
 };

 
 // Setup the event handlers
 $( document ).on( "ready", function()
                  {
                  $('#computeGrade').on('click', computeGrade);
                  $('#saveSettings').on('click', saveSettings);
                  $('#cancelSettings').on('click', cancelSettings);
                  $('#saveMaxSettings').on('click', saveMaxSettings);
                     
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
               
                  //Sets value of setting to value
                     Number($('#gradeA').val(gApoint));
                     Number($('#gradeB').val(gBpoint));
                     Number($('#gradeC').val(gCpoint));
                     Number($('#gradeD').val(gDpoint));
                 /*
                  $('#Homeworks').attr('max', gradeMaxSetting1) ;
                  $('#Homeworks').slider("refresh");
                  $('#Labs').attr('max', gradeMaxSetting2);
                  $('#Labs').slider("refresh");
                  $('#Project').attr('max', gradeMaxSetting3);
                  $("#Project").slider("refresh");
                  $('#Presentation').attr('max', gradeMaxSetting4);
                  $('#Presentation').slider("refresh");
                  $('#Midterm').attr('max', gradeMaxSetting5);
                  $("#Midterm").slider("refresh");
                  $('#Final').attr('max', gradeMaxSetting6);
                  $("#Final").slider("refresh");
                  */
                  });

 // Load plugin
 $( document ).on( "deviceready", function(){
                  StatusBar.overlaysWebView( false );
                  StatusBar.backgroundColorByName("gray");
                  });
 }

 
 )(jQuery);
