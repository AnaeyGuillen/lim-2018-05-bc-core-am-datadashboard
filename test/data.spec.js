describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

  describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);

      assert.equal(users.length, processed.length);

      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercices);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.exercices, {
          total: 2,
          completed: 0,
          percent: 0,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreAvg: 29,
          scoreSum: 57,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(userStats, orderBy, orderDirection)', () => {

    let listOrder = sortUsers(userStats, OrderBy, orderDirection);

    it('debería retornar arreglo de usuarios ordenado por nombre ASC');
    {cohort: "lim-2018-03-pre-core-pw"; 
    cohortData: (courses, progress, users); 
    orderBy: "sortNombre"; 
    orderDirection: "ASC"; 
    search: ""};
    
    it('debería retornar arreglo de usuarios ordenado por nombre DESC');
    {cohort: "lim-2018-03-pre-core-pw"; 
    cohortData: (courses, progress, users); 
    orderBy: "sortNombre"; 
    orderDirection: "DESC"; 
    search: ""};

    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC');

    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC');
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC');
      {cohort: "lim-2018-03-pre-core-pw"; 
      cohortData: (courses, progress, users);
      orderBy: "sortPercentExercices";
      orderDirection: "ASC";
      search: ""};

    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC');
      {cohort: "lim-2018-03-pre-core-pw"; 
      cohortData: (courses, progress, users);
      orderBy: "sortPercentExercices";
      orderDirection: "DESC";
      search: ""};

    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC');
      {cohort: "lim-2018-03-pre-core-pw"; 
      cohortData: (courses, progress, users); 
      orderBy: "sortPercentQuizzes"; 
      orderDirection: "ASC"; 
      search: ""};

    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC');
      {cohort: "lim-2018-03-pre-core-pw"; 
      cohortData: (courses, progress, users); 
      orderBy: "sortPercentQuizzes"; 
      orderDirection: "DESC"; 
      search: ""};

    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC');
    {cohort: "lim-2018-03-pre-core-pw";
    cohortData: (courses, progress, users);
    orderBy: "sortPercentQuizzesScoreAvg";
    orderDirection: "ASC"; 
    search: ""};
    
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC');
      {cohort: "lim-2018-03-pre-core-pw";
      cohortData: (courses, progress, users);
      orderBy: "sortPercentQuizzesScoreAvg";
      orderDirection: "DESC"; 
      search: ""};
      
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC');
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC');

  });

  describe('filterUsers(usersSortStats,search)', () => {

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)');

  });

  describe('processCohortData(options)', () => {

    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter');

  });

});
