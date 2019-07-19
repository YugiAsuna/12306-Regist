
let oRadio = $('input[name="cre"]');
let oCreSelect = $('select[name="cre"]');
let oEmail = $('.email');
let nameRules = $('.name > .tips.rules');


// 表单选项改变项
let oRadioBox = $('.radio-box');
let creLastDate =  appendTextTpl('证件有效期截止日期：', '（用于身份核验，请正确填写）').hide();
let birth = appendTextTpl('出生日期：').hide();
let sex = appendSexTpl().hide();
let country = appendCountryTpl().hide();


oEmail.before(creLastDate).before(birth).before(sex).before(country);

oRadio.change(function () {
    let newRadioVal = $('input[name="cre"]:checked').val();
    switch (newRadioVal){
        case 'ch':
            creLastDate.hide();
            birth.hide();
            sex.hide();
            country.hide();
            break;
        case 'foreign':
            creLastDate.show();
            birth.show();
            sex.show();
            country.show();
            break;
        case 'ga':
            creLastDate.hide();
            birth.hide();
            sex.hide();
            country.hide();
            break;
    }

});
oCreSelect.change(function () {
    let newCreVal = $('option.op:checked').val();
    switch (newCreVal){
        case 'ch':
            creLastDate.hide();
            birth.hide();
            sex.hide();
            country.hide();
            oRadioBox.show();
            oRadio.trigger('change');
            break;
        case 'ga':
            oRadioBox.hide();
            country.hide();
            creLastDate.show();
            birth.show();
            sex.show();
            break;
        case 'tw':
            oRadioBox.hide();
            country.hide();
            creLastDate.show();
            birth.show();
            sex.show();
            break;
        case 'hz':
            oRadioBox.hide();
            creLastDate.hide();
            birth.show();
            sex.show();
            country.show();
            break;
    }
});

nameRules.on('mouseenter', function () {
    let tipValue = $('<div>\n' +
        '    <ol class="tips-value">\n' +
        '        <li>确认姓名中生僻字无法输入时，可用生僻字拼音或同音字替代。</li>\n' +
        '        <li>输入姓名保存后，遇有系统无法正确显示的汉字，可用该汉字的拼音或同音字重新修改后保存。</li>\n' +
        '        <li>姓名中有繁体字无法输入时，可用简体替代。</li>\n' +
        '        <li>姓名较长，汉字与英文字符合计超过30个（1个汉字算2个字符）的，需按姓名中第一个汉字或英文字符开始按顺序输入30个字符（空格字符不输入），其中英文字符输入时不区别大小写。</li>\n' +
        '        <li>姓名中有"."或"·"时，请仔细辨析身份证件原件上的"."或"·"，准确输入。</li>\n' +
        '        <li>姓名中有","时，请使用空格替换。</li>\n' +
        '    </ol>\n' +
        '</div>');
    $('.name').append(tipValue);
    $(this).on('mouseleave', function () {
        tipValue.remove();
    })
});

function appendTextTpl(labelText, tipsText) {
    let oLabel = $('.username label').eq(0).clone();
    oLabel.text(labelText);
    let oInput = $('<input type="text" class="text-input">');
    let newInputDiv = $('<div></div>').append(oLabel).append(oInput);
    if(tipsText){
        let oTips = $('<span class="tips"></span>');
        oTips.text(tipsText);
        newInputDiv.append(oTips);
    }
    return newInputDiv;
}
function appendSexTpl() {
    let oLabel = $('.username label').eq(0).clone();
    oLabel.text('性 别：');
    let oInput = $('<input type="radio" name="sex" value="male" id="male"><label for="male" style="margin-right: 25px">男</label><input type="radio" name="sex" value="female" id="female"><label for="female">女</label>');
    let newInputDiv = $('<div class="sex-radio"></div>').append(oLabel).append(oInput);
    return newInputDiv;
}

function appendCountryTpl() {
    let oLabel = $('.username label').eq(0).clone();
    oLabel.text('国家/地区：');
    let countryOption = '<select name="country" id="country"><option value="china">中国CHINA</option>\n' +
        '<option value="china">美国UNITEDSTATES</option>\n' +
        '<option value="china">阿富汗AFGHANISTANA</option>\n' +
        '<option value="china">阿尔巴尼亚ALBANIA</option></select>';
    let oSelect = $(countryOption);
    let newInputDiv = $('<div class="country"></div>').append(oLabel).append(oSelect);
    return newInputDiv;
}