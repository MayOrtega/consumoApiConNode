function categorizeByGender(users){
    const categorizedUsers = {
        male : [],
        female: []
    };

    users.forEach(user => {
        if(user.gender === 'male'){
            categorizedUsers.male.push(user);
        } else if(user.gender === 'female'){
            categorizedUsers.female.push(user);
        }i8
    });
    return categorizedUsers;
}