(function($) {
 "use strict";
 
 var gApoint = 90.0;
 var gBpoint = 80.0;
 var gCpoint = 70.0;
 var gDpoint = 60.0;
 
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
    $('#totalPoints').text(totalPoints.toString());
    $('#maxPoints').text(maxPoints.toString());
    $('#finalPercentage').text(currentPercentage.toString());
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
        localStorage.setItem('gradec', cPoint);
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

                  var gradeCutOffSettingA = localStorage.getItem('gradeA');
                  var gradeCutOffSettingB = localStorage.getItem('gradeB');
                  var gradeCutOffSettingC = localStorage.getItem('gradeB');
                  var gradeCutOffSettingD = localStorage.getItem('gradeD');
                  
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
                  
                     Number($('#gradeA').val(gApoint));
                     Number($('#gradeB').val(gBpoint));
                     Number($('#gradeC').val(gCpoint));
                     Number($('#gradeD').val(gDpoint));
                  
                  });

 // Load plugin
 $( document ).on( "deviceready", function(){
                  StatusBar.overlaysWebView( false );
                  StatusBar.backgroundColorByName("gray");
                  });
 }

 
 )(jQuery);
