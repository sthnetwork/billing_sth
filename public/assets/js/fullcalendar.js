// npm package: fullcalendar
// github link: https://github.com/fullcalendar/fullcalendar

'use strict';

(function () {

  const Draggable = FullCalendar.Draggable;
  const calendarEl = document.getElementById('fullcalendar');
  const containerEl = document.getElementById('external-events');

  const curYear = moment().format('YYYY');
  const curMonth = moment().format('MM');

  // sample calendar events data
  // Calendar Event Source
  const calendarEvents = {
    id: 1,
    backgroundColor: 'rgba(1,104,250, .15)',
    borderColor: '#0168fa',
    events: [
      {
        id: '1',
        start: curYear+'-'+curMonth+'-08T08:30:00',
        end: curYear+'-'+curMonth+'-08T13:00:00',
        title: 'Google Developers Meetup',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      },{
        id: '2',
        start: curYear+'-'+curMonth+'-10T09:00:00',
        end: curYear+'-'+curMonth+'-10T17:00:00',
        title: 'Design/Code Review',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      },{
        id: '3',
        start: curYear+'-'+curMonth+'-13T12:00:00',
        end: curYear+'-'+curMonth+'-13T18:00:00',
        title: 'Lifestyle Conference',
        description: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi...'
      },{
        id: '4',
        start: curYear+'-'+curMonth+'-15T07:30:00',
        end: curYear+'-'+curMonth+'-15T15:30:00',
        title: 'Team Weekly Trip',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      },{
        id: '5',
        start: curYear+'-'+curMonth+'-17T10:00:00',
        end: curYear+'-'+curMonth+'-19T15:00:00',
        title: 'DJ Festival',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      },{
        id: '6',
        start: curYear+'-'+curMonth+'-08T13:00:00',
        end: curYear+'-'+curMonth+'-08T18:30:00',
        title: 'Carl Henson\'s Wedding',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      }
    ]
  };

  // Birthday Events Source
  const birthdayEvents = {
    id: 2,
    backgroundColor: 'rgba(16,183,89, .25)',
    borderColor: '#10b759',
    events: [
      {
        id: '7',
        start: curYear+'-'+curMonth+'-01T18:00:00',
        end: curYear+'-'+curMonth+'-01T23:30:00',
        title: 'Jensen Birthday',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      },
      {
        id: '8',
        start: curYear+'-'+curMonth+'-21T15:00:00',
        end: curYear+'-'+curMonth+'-21T21:00:00',
        title: 'Carl\'s Birthday',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      },
      {
        id: '9',
        start: curYear+'-'+curMonth+'-23T15:00:00',
        end: curYear+'-'+curMonth+'-23T21:00:00',
        title: 'Yaretzi\'s Birthday',
        description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...'
      }
    ]
  };


  const holidayEvents = {
    id: 3,
    backgroundColor: 'rgba(241,0,117,.25)',
    borderColor: '#f10075',
    events: [
      {
        id: '10',
        start: curYear+'-'+curMonth+'-04',
        end: curYear+'-'+curMonth+'-06',
        title: 'Feast Day'
      },
      {
        id: '11',
        start: curYear+'-'+curMonth+'-26',
        end: curYear+'-'+curMonth+'-27',
        title: 'Memorial Day'
      },
      {
        id: '12',
        start: curYear+'-'+curMonth+'-28',
        end: curYear+'-'+curMonth+'-29',
        title: 'Veteran\'s Day'
      }
    ]
  };

  const discoveredEvents = {
    id: 4,
    backgroundColor: 'rgba(0,204,204,.25)',
    borderColor: '#00cccc',
    events: [
      {
        id: '13',
        start: curYear+'-'+curMonth+'-17T08:00:00',
        end: curYear+'-'+curMonth+'-18T11:00:00',
        title: 'Web Design Workshop Seminar'
      }
    ]
  };

  const meetupEvents = {
    id: 5,
    backgroundColor: 'rgba(91,71,251,.2)',
    borderColor: '#5b47fb',
    events: [
      {
        id: '14',
        start: curYear+'-'+curMonth+'-03',
        end: curYear+'-'+curMonth+'-05',
        title: 'UI/UX Meetup Conference'
      },
      {
        id: '15',
        start: curYear+'-'+curMonth+'-18',
        end: curYear+'-'+curMonth+'-20',
        title: 'Angular Conference Meetup'
      }
    ]
  };


  const otherEvents = {
    id: 6,
    backgroundColor: 'rgba(253,126,20,.25)',
    borderColor: '#fd7e14',
    events: [
      {
        id: '16',
        start: curYear+'-'+curMonth+'-06',
        end: curYear+'-'+curMonth+'-08',
        title: 'My Rest Day'
      },
      {
        id: '17',
        start: curYear+'-'+curMonth+'-29',
        end: curYear+'-'+curMonth+'-31',
        title: 'My Rest Day'
      }
    ]
  };

  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText,
        backgroundColor: eventEl.getAttribute('data-bg') || 'rgba(91,71,251,.2)',
        borderColor: eventEl.getAttribute('data-border') || '#5b47fb',
      };
    }
  });


  // initialize the calendar
  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,today,next",
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    fixedWeekCount: true,
    // height: 300,
    initialView: 'dayGridMonth',
    timeZone: 'UTC',
    hiddenDays:[],
    navLinks: true,
    // weekNumbers: true,
    // weekNumberFormat: {
    //   week:'numeric',
    // },
    dayMaxEvents: 2,
    events: [],
    eventSources: [calendarEvents, birthdayEvents, holidayEvents, discoveredEvents, meetupEvents, otherEvents],
    drop: function(info) {
        // remove the element from the "Draggable Events" list
        info.draggedEl.parentNode.removeChild(info.draggedEl);
    },
    eventClick: function(info) {
      console.log(info);
      const eventObj = info.event;
      document.querySelector('#modalTitle1').innerHTML = eventObj.title;
      document.querySelector('#modalBody1').innerHTML = eventObj._def.extendedProps.description || '{ no description }';
      const fullCalModal = new bootstrap.Modal('#fullCalModal');
      fullCalModal.show();
    },
    dateClick: function(info) {
      console.log(info);
      const createEventModal = new bootstrap.Modal('#createEventModal');
      createEventModal.show();
    },
  });

  calendar.render();

})();