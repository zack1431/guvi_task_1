var resume_json = {
	"title" : "Curricullam Vitae",
	"resumeDate" : "02-04-22",
	"place" : "Pune",
	"resume_body" : [

		{	
			"title":"Personal Profile",
			"paragraph": "",
			"Name" : "Jakir Shaikh",
			"Mobile_no": "8087044082",
			"Email_id" : "zakrshkh16@gmail.com",
			"dob" : "31-03-1995",
			"Gender" : "Male",
			"Nationality" : "Indian",
			"Marital_status" : "Married",
			"companies" : [],

		},
		{	
			"title":"Career Objective","companies" : [],
			"paragraph": "Obtaining a challenging position in Full Stack Development in a reputed organization where I can utilize my development knowledge, communications and technical skills to explore and seek an opportunity for continuous learning for the development of the organization."

		},
		{	
			"title":"Educational Qualification","companies" : [],
			"paragraph": "<b>Bachelor Degree (Bachelor Of Computer Application) </b><ol><li>University/ Institute- Poona College Of Arts, Science and Commerce.</li><li>Year of passing –2015</li><li>Percentage: - 60%.</li></ol>"

		},
		{	
			"title":"Professional Experience",
			"paragraph": "<p><b>Job Responsibilities</b></p><ul><li>Working on different technologies to maintain the CRM(Customer Relation Management).</li><li>Analysing, Designing and developing models of software interface.</li><li>Development and Troubleshooting of the code.</li><li>Creating layouts, editing images in photoshop and illustrator.</li><li>Managing Software Lifecycle according to MVC architecture.</li><li>Simple and reusable coding for future changes.</li></ul>",
			"companies" : [
				{
					"Company_name": "3 commas technologies",
					"Designation" : "web Developer",
					"Duration" : "1-03-2018 to 25-12-2018"
				},
				{
					"Company_name": "Parmar Excellence",
					"Designation" : "SOftware Developer",
					"Duration" : "1-01-2019 to 12-12-2020"
				},
				{
					"Company_name": "Vizlitics",
					"Designation" : "Full Stack Developer",
					"Duration" : "Presently Working"
				}
			]
			

		},
		{	
			"title":"Technical Skills","companies" : [],
			"skills":[
				{
					"skill":"Html"
				},
				{
					"skill":"CSS"
				},
				{
					"skill":"Angular js"
				},
				{
					"skill":"Ionic Framework"
				},
				{
					"skill":"Javascript"
				},
				{
					"skill":"Sql/postgresql"
				},
				{
					"skill":"Node Js"
				}
			]

		},
	]
};

var element = document.getElementById('title');
element.innerHTML = resume_json.title;

resume_json.resume_body.forEach(function(pio,key) {
	if(pio.title != "Technical Skills"){
		if(pio.companies.length > 0){
			pio.companies.forEach((val,key1) =>{
				pio.company = val;
				safeHtml(pio,key,key1);
			})
		}
		else
		{
			pio.company = '';
			safeHtml(pio,key,-1);
		}
	}
		
	if(pio.title == "Technical Skills"){
		pio.skills.forEach((val3,key2)=>{
			pio.user_skills = val3.skill
			safeHtml(pio,key,key2)
		})

	}
  	

});

function safeHtml(pio,key,key1) {

  var div = document.createElement('div');
  div.style.marginLeft= '150px';
  div.style.marginRight = '150px';
  div.setAttribute('id', key);
  if(pio.title != "Technical Skills"){
  	if(key1 == -1 || key1 == 0){
  		if(pio.title == "Personal Profile"){
  			div.innerHTML = '<p><b>' + pio.title + '</b></p>' + '<p>' + pio.paragraph + '</p><p>Name: '+pio.Name +'</p><p> Mobile No: '+pio.Mobile_no +'</p><p>Email Id: '+pio.Email_id +'</p><p>DOB: '+pio.dob +'</p><p>Gender: '+pio.Gender +'</p><p>Nationality: '+pio.Nationality +'</p><p>Marital Status: '+pio.Marital_status + '</p>';
  			
  		}
  		else
  		{
  			div.innerHTML = '<p><b>' + pio.title + '</b></p>' + '<p>' + pio.paragraph == undefined ? '<b>'+ pio.title+'</b>' : '<b>'+pio.title+' </b></p>'+pio.paragraph + '</p>';
  		}
  	}
  	if(pio.title == 'Professional Experience'){
  		div.innerHTML += '<p>'
	  	div.innerHTML += pio.company.length != 0 ? '<b>Company Name: </b>'+pio.company.Company_name + '<br/>'+'<b>Designation: </b>' + pio.company.Designation + '<br/>'+'<b> Duration: </b>'+ pio.company.Duration+'<br/>' : '<br/>';
	  	div.innerHTML += '</p>'
  	}
	  	
  }
  else
  {
  	if(key1 == 0){
  		div.innerHTML = '<p><b>' + pio.title + '</b></p>';
  	}
  	key1 += 1;
  	div.innerHTML += '<p><ol start='+key1+'><li>'+pio.user_skills+'</li></ol></p> ';
  	if(key1 == 7)
  	{
  		var d = new Date(resume_json.resumeDate);
  		
  		div.innerHTML += '<p>I hereby declare that the information given above is true to the best of my knowledge and I owe the responsibility for the same.</p><p style="float:left"><b>'+d+'</b></p><p style="float:right"><b>Jakir Shaikh</b></p><p style="padding-bottom:70px;"></p>'
  	}
  }

  document.body.appendChild(div);


}
