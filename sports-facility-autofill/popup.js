document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings
    chrome.storage.sync.get(
        [
            'groupName', 'lastName', 'firstName', 'studentNo', 'tel1', 'tel2', 'tel3', 'email',
            'item28', 'item29', 'usageTime', 'item32', 'item33', 'item38', 'item34',
            'item35', 'item39', 'item40', 'item41', 'item42_0', 'item42_1', 'item42_2',
            'item25', 'terms'
        ],
        (items) => {
            if (items.groupName) document.getElementById('groupName').value = items.groupName;
            if (items.lastName) document.getElementById('lastName').value = items.lastName;
            if (items.firstName) document.getElementById('firstName').value = items.firstName;
            if (items.studentNo) document.getElementById('studentNo').value = items.studentNo;
            if (items.tel1) document.getElementById('tel1').value = items.tel1;
            if (items.tel2) document.getElementById('tel2').value = items.tel2;
            if (items.tel3) document.getElementById('tel3').value = items.tel3;
            if (items.email) document.getElementById('email').value = items.email;

            if (items.item28) document.getElementById('item28').value = items.item28;
            if (items.item29) document.getElementById('item29').value = items.item29;
            if (items.usageTime) document.getElementById('usageTime').value = items.usageTime;
            if (items.item32) document.getElementById('item32').value = items.item32;
            if (items.item33) document.getElementById('item33').value = items.item33;
            if (items.item38) document.getElementById('item38').value = items.item38;
            if (items.item34) document.getElementById('item34').value = items.item34;
            if (items.item35) document.getElementById('item35').value = items.item35;
            if (items.item39) document.getElementById('item39').value = items.item39;
            if (items.item40) document.getElementById('item40').value = items.item40;
            if (items.item41) document.getElementById('item41').value = items.item41;
            if (items.item42_0) document.getElementById('item42_0').value = items.item42_0;
            if (items.item42_1) document.getElementById('item42_1').value = items.item42_1;
            if (items.item42_2) document.getElementById('item42_2').value = items.item42_2;
            if (items.item25) document.getElementById('item25').value = items.item25;
            if (items.terms) document.getElementById('terms').checked = items.terms;
        }
    );

    // Save settings
    document.getElementById('save').addEventListener('click', () => {
        const settings = {
            groupName: document.getElementById('groupName').value,
            lastName: document.getElementById('lastName').value,
            firstName: document.getElementById('firstName').value,
            studentNo: document.getElementById('studentNo').value,
            tel1: document.getElementById('tel1').value,
            tel2: document.getElementById('tel2').value,
            tel3: document.getElementById('tel3').value,
            email: document.getElementById('email').value,
            item28: document.getElementById('item28').value,
            item29: document.getElementById('item29').value,
            usageTime: document.getElementById('usageTime').value,
            item32: document.getElementById('item32').value,
            item33: document.getElementById('item33').value,
            item38: document.getElementById('item38').value,
            item34: document.getElementById('item34').value,
            item35: document.getElementById('item35').value,
            item39: document.getElementById('item39').value,
            item40: document.getElementById('item40').value,
            item41: document.getElementById('item41').value,
            item42_0: document.getElementById('item42_0').value,
            item42_1: document.getElementById('item42_1').value,
            item42_2: document.getElementById('item42_2').value,
            item25: document.getElementById('item25').value,
            terms: document.getElementById('terms').checked
        };

        chrome.storage.sync.set(settings, () => {
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 2000);
        }
        );
    });
});
