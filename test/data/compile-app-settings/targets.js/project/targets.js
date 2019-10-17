module.exports = [
  {
    id: 'active-pregnancies',
    appliesTo: 'reports',
    type: 'count',
    icon: 'pregnancy-1',
    goal: -1,
    translation_key: 'targets.active_pregnancies.title',
    subtitle_translation_key: 'targets.all_time.subtitle',

    appliesIf: function(c, r) { return r.form === 'D'; },
    date: 'now',
  },
  {
    id: 'imm-children-registered-this-month',
    appliesTo: 'contacts',
    appliesToType: ['person'],
    type: 'count',
    icon: 'child',
    goal: -1,
    translation_key: 'targets.children_registered.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    context: 'user.parent.use_cases.split(" ").indexOf("imm") !== -1',

    appliesIf: function(c) { return c.age_in_months <= 60; },
    date: function(c) { return c.contact.reported_date; },
  },
];
