function WhirlWindWarranty(){
    let header;
    let label;
    let para;
    let element;

    header = document.createElement('h2');
    header.innerHTML = '<h2> Warranty Information </h2> ';
    document.body.appendChild(header);

    para= document.createElement('p');
    para.innerHTML = '<p> We need your Information to process your warranty. Please fill out your Contact Information</p>';
    document.body.appendChild(para);

    header=document.createElement('h3');
    header.innerHTML = '<h3> Customer Information</h3>';
    document.body.appendChild(header);

    label= document.createElement('label');
    label.innerHTML = "First Name";
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", 'text');
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML = "Last Name";
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", 'text');
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML = "Company Name";
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", 'text');
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML = "Email";
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", 'text');
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML = "Phone Number";
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", 'text');
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML = "Fax Number";
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", 'text');
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'Address';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'City';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'State';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'Zip';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'Country';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    header = document.createElement('h3')
    header.innerHTML='<h3> Device Information</h3>'
    document.body.appendChild(header)

    label= document.createElement('label');
    label.innerHTML= 'Unit Information';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'Date of Purchase';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'Model';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    label= document.createElement('label');
    label.innerHTML= 'Warranty Serial Number';
    document.body.appendChild(label);
    element= document.createElement('input');
    element.setAttribute("type", "text");
    document.body.appendChild(element);

    element= document.createElement('button');
    element.innerHTML='<button> Save</button>'
    element.setAttribute("value", "Save")
    document.body.appendChild(element)

    element= document.createElement('button');
    element.innerHTML='<button> Close </button>'
    element.setAttribute("value","Close")
    document.body.appendChild(element)



















    
    
}