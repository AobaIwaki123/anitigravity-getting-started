document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings
    chrome.storage.sync.get(
        ['groupName', 'lastName', 'firstName', 'studentNo', 'tel1', 'tel2', 'tel3', 'email'],
        (items) => {
            if (items.groupName) document.getElementById('groupName').value = items.groupName;
            if (items.lastName) document.getElementById('lastName').value = items.lastName;
            if (items.firstName) document.getElementById('firstName').value = items.firstName;
            if (items.studentNo) document.getElementById('studentNo').value = items.studentNo;
            if (items.tel1) document.getElementById('tel1').value = items.tel1;
            if (items.tel2) document.getElementById('tel2').value = items.tel2;
            if (items.tel3) document.getElementById('tel3').value = items.tel3;
            if (items.email) document.getElementById('email').value = items.email;
        }
    );

    // Save settings
    document.getElementById('save').addEventListener('click', () => {
        const groupName = document.getElementById('groupName').value;
        const lastName = document.getElementById('lastName').value;
        const firstName = document.getElementById('firstName').value;
        const studentNo = document.getElementById('studentNo').value;
        const tel1 = document.getElementById('tel1').value;
        const tel2 = document.getElementById('tel2').value;
        const tel3 = document.getElementById('tel3').value;
        const email = document.getElementById('email').value;

        chrome.storage.sync.set(
            {
                groupName,
                lastName,
                firstName,
                studentNo,
                tel1,
                tel2,
                tel3,
                email
            },
            () => {
                const status = document.getElementById('status');
                status.textContent = 'Options saved.';
                setTimeout(() => {
                    status.textContent = '';
                }, 2000);
            }
        );
    });
});
