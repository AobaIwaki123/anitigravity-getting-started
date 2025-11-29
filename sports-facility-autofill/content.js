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
    emailConfirm: 'reservations-add-users-mail-confirm'
};

function fillField(id, value) {
    const element = document.getElementById(id);
    if (element && value) {
        element.value = value;
        // Dispatch input event to ensure any listeners pick up the change
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
    }
}

chrome.storage.sync.get(
    ['groupName', 'lastName', 'firstName', 'studentNo', 'tel1', 'tel2', 'tel3', 'email'],
    (items) => {
        if (chrome.runtime.lastError) {
            console.error('Error retrieving settings:', chrome.runtime.lastError);
            return;
        }

        console.log('Sports Facility Auto-fill: Filling form...');

        fillField(FIELD_IDS.groupName, items.groupName);
        fillField(FIELD_IDS.lastName, items.lastName);
        fillField(FIELD_IDS.firstName, items.firstName);
        fillField(FIELD_IDS.studentNo, items.studentNo);
        fillField(FIELD_IDS.tel1, items.tel1);
        fillField(FIELD_IDS.tel2, items.tel2);
        fillField(FIELD_IDS.tel3, items.tel3);
        fillField(FIELD_IDS.email, items.email);
        fillField(FIELD_IDS.emailConfirm, items.email); // Use same email for confirm
    }
);
