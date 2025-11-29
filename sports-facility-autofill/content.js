// IDs identified from inspection
const FIELD_IDS = {
    groupName: 'reservations-add-users-addition-values-item-43',
    lastName: 'reservations-add-users-addition-values-item-22-value-0',
    firstName: 'reservations-add-users-addition-values-item-22-value-1',
    studentNo: 'reservations-add-users-addition-values-item-67',
    tel1: 'reservations-add-users-addition-values-item-23-value-0',
    tel2: 'reservations-add-users-addition-values-item-23-value-1',
    tel3: 'reservations-add-users-addition-values-item-23-value-2',
    email: 'reservations-add-users-mail',
    emailConfirm: 'reservations-add-users-mail-confirm',

    // New fields
    item28: 'reservations-add-reservations-addition-values-item-28',
    item29: 'reservations-add-reservations-addition-values-item-29',
    usageTime: 'reservations-add-reservations-usage-time',
    item32: 'reservations-add-reservations-addition-values-item-32',
    item33: 'reservations-add-reservations-addition-values-item-33',
    item38: 'reservations-add-reservations-addition-values-item-38',
    item34: 'reservations-add-reservations-addition-values-item-34',
    // item35 is radio, handled specially
    item39: 'reservations-add-reservations-addition-values-item-39',
    item40: 'reservations-add-reservations-addition-values-item-40',
    item41: 'reservations-add-reservations-addition-values-item-41',
    item42_0: 'reservations-add-reservations-addition-values-item-42-value-0',
    item42_1: 'reservations-add-reservations-addition-values-item-42-value-1',
    item42_2: 'reservations-add-reservations-addition-values-item-42-value-2',
    item25: 'reservations-add-reservations-addition-values-item-25',
    terms: 'reservations-add-reservation-terms'
};

function fillField(id, value) {
    const element = document.getElementById(id);
    if (element && value !== undefined && value !== null && value !== '') {
        if (element.type === 'checkbox') {
            element.checked = value;
        } else if (element.tagName.toLowerCase() === 'select') {
            element.value = value;
        } else {
            // This branch handles text inputs, number inputs, and textarea elements.
            element.value = value;
        }
        // Dispatch input event to ensure any listeners pick up the change
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        element.dispatchEvent(new Event('blur', { bubbles: true })); // Ensure blur event is dispatched
    }
}

function fillRadio(name, value) {
    if (!value) return;
    // Radio buttons usually share a name, but here we might need to find by value or ID pattern
    // The inspection showed IDs like reservations-addition_values-item_35-35 for value 35
    // We can try to find the input with the specific value
    // Using single quotes to avoid lint error about backticks in module declaration
    const radios = document.querySelectorAll('input[name="reservations[addition_values][item_35]"]');
    radios.forEach(radio => {
        if (radio.value === value) {
            radio.checked = true;
            radio.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
}

chrome.storage.sync.get(
    [
        'groupName', 'lastName', 'firstName', 'studentNo', 'tel1', 'tel2', 'tel3', 'email',
        'item28', 'item29', 'usageTime', 'item32', 'item33', 'item38', 'item34',
        'item35', 'item39', 'item40', 'item41', 'item42_0', 'item42_1', 'item42_2',
        'item25', 'terms'
    ],
    (items) => {
        if (chrome.runtime.lastError) {
            console.error('Error retrieving settings:', chrome.runtime.lastError);
            return;
        }

        console.log('Sports Facility Auto-fill: Filling form...');
        console.log('Retrieved settings:', items);

        // Fill basic fields
        fillField(FIELD_IDS.groupName, items.groupName);
        fillField(FIELD_IDS.lastName, items.lastName);
        fillField(FIELD_IDS.firstName, items.firstName);
        fillField(FIELD_IDS.studentNo, items.studentNo);
        fillField(FIELD_IDS.tel1, items.tel1);
        fillField(FIELD_IDS.tel2, items.tel2);
        fillField(FIELD_IDS.tel3, items.tel3);
        fillField(FIELD_IDS.email, items.email);
        fillField(FIELD_IDS.emailConfirm, items.email);

        // Fill additional details with logging
        console.log('Filling Additional Details...');
        console.log('item28 value:', items.item28, 'element:', document.getElementById(FIELD_IDS.item28));
        fillField(FIELD_IDS.item28, items.item28);

        console.log('item29 value:', items.item29, 'element:', document.getElementById(FIELD_IDS.item29));
        fillField(FIELD_IDS.item29, items.item29);

        console.log('usageTime value:', items.usageTime, 'element:', document.getElementById(FIELD_IDS.usageTime));
        fillField(FIELD_IDS.usageTime, items.usageTime);

        console.log('item32 value:', items.item32, 'element:', document.getElementById(FIELD_IDS.item32));
        fillField(FIELD_IDS.item32, items.item32);

        console.log('item33 value:', items.item33, 'element:', document.getElementById(FIELD_IDS.item33));
        fillField(FIELD_IDS.item33, items.item33);

        console.log('item38 value:', items.item38, 'element:', document.getElementById(FIELD_IDS.item38));
        fillField(FIELD_IDS.item38, items.item38);

        console.log('item34 value:', items.item34, 'element:', document.getElementById(FIELD_IDS.item34));
        fillField(FIELD_IDS.item34, items.item34);

        console.log('item35 value:', items.item35);
        fillRadio('reservations[addition_values][item_35]', items.item35);

        console.log('item39 value:', items.item39, 'element:', document.getElementById(FIELD_IDS.item39));
        fillField(FIELD_IDS.item39, items.item39);

        console.log('item40 value:', items.item40, 'element:', document.getElementById(FIELD_IDS.item40));
        fillField(FIELD_IDS.item40, items.item40);

        console.log('item41 value:', items.item41, 'element:', document.getElementById(FIELD_IDS.item41));
        fillField(FIELD_IDS.item41, items.item41);

        console.log('item42_0 value:', items.item42_0, 'element:', document.getElementById(FIELD_IDS.item42_0));
        fillField(FIELD_IDS.item42_0, items.item42_0);

        console.log('item42_1 value:', items.item42_1, 'element:', document.getElementById(FIELD_IDS.item42_1));
        fillField(FIELD_IDS.item42_1, items.item42_1);

        console.log('item42_2 value:', items.item42_2, 'element:', document.getElementById(FIELD_IDS.item42_2));
        fillField(FIELD_IDS.item42_2, items.item42_2);

        console.log('item25 value:', items.item25, 'element:', document.getElementById(FIELD_IDS.item25));
        fillField(FIELD_IDS.item25, items.item25);

        console.log('terms value:', items.terms, 'element:', document.getElementById(FIELD_IDS.terms));
        fillField(FIELD_IDS.terms, items.terms);

        console.log('Auto-fill complete!');
    }
);
