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
        } else {
            // This handles text inputs, number inputs, textarea, and select elements.
            element.value = value;
        }
        // Dispatch input event to ensure any listeners pick up the change
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        element.dispatchEvent(new Event('blur', { bubbles: true }));
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

// Field mapping: storage key -> field ID
const FIELD_MAPPING = {
    groupName: FIELD_IDS.groupName,
    lastName: FIELD_IDS.lastName,
    firstName: FIELD_IDS.firstName,
    studentNo: FIELD_IDS.studentNo,
    tel1: FIELD_IDS.tel1,
    tel2: FIELD_IDS.tel2,
    tel3: FIELD_IDS.tel3,
    email: FIELD_IDS.email,
    item28: FIELD_IDS.item28,
    item29: FIELD_IDS.item29,
    usageTime: FIELD_IDS.usageTime,
    item32: FIELD_IDS.item32,
    item33: FIELD_IDS.item33,
    item38: FIELD_IDS.item38,
    item34: FIELD_IDS.item34,
    item39: FIELD_IDS.item39,
    item40: FIELD_IDS.item40,
    item41: FIELD_IDS.item41,
    item42_0: FIELD_IDS.item42_0,
    item42_1: FIELD_IDS.item42_1,
    item42_2: FIELD_IDS.item42_2,
    item25: FIELD_IDS.item25,
    terms: FIELD_IDS.terms
};

chrome.storage.sync.get(Object.keys(FIELD_MAPPING).concat(['item35']), (items) => {
    if (chrome.runtime.lastError) {
        console.error('Error retrieving settings:', chrome.runtime.lastError);
        return;
    }

    console.log('Sports Facility Auto-fill: Filling form...');
    console.log('Retrieved settings:', items);

    // Fill all mapped fields
    Object.entries(FIELD_MAPPING).forEach(([key, fieldId]) => {
        if (items[key] !== undefined) {
            fillField(fieldId, items[key]);
        }
    });

    // Email confirmation uses the same value as email
    fillField(FIELD_IDS.emailConfirm, items.email);

    // Handle radio button separately
    if (items.item35) {
        fillRadio('reservations[addition_values][item_35]', items.item35);
    }

    console.log('Auto-fill complete!');
});
