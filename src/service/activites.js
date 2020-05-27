
// -----------------------------------------------------------------------------
// Activity Service
// Currently, this service keeps the relationship between the member and the course.
//
// Q: How to use this service?
// A: 
//      import avc from '@service/appservice.js'
//      activitylist = avc.activities().find(null, null)
//
// modified by zhangwei on 2020.04.25
// -----------------------------------------------------------------------------

class ActivityService {
    constructor(nio) {
        this._nio = nio;
    }

    // TODO
    // return
    //  the data from the backend. If failed, then the callback function 
    //  will be called. And you display the error message inside the callback
    //
    //      callback(err) 
    //  It's the UI layers responsibility to implement a callback method.
    //
    find(criterion, callback)
    {
        return this._nio.find("/admin/activity/", criterion, callback)
    }
    
    find_by_member_course_time(memberid, courseid, time)
    {
        params = [{"memberid": memberid},{"courseid": courseid}, {"begintime": time}]
        return this._nio.find("/admin/activity/", params, callback)
    }

    get(id)
    {
        // return this._nio.get("/admin/activity/", {"id": id}, callback)
        url = "/admin/activity/" + id
        return this._nio.get(url, null, callback)
    }

    add(memberid, courseid, begintime, endtime)
    {
        params = [{"memberid": memberid},{"courseid": courseid}, {"begintime": time}, {"endtime": time}]
        return this._nio.get("/admin/activity/", params, callback)
    }

    remove(id)
    {
        url = "/admin/activity/" + id
        return this._nio.delete(url, null, callback)
    }

    remove_by_member_course_time(memberid, courseid, time)
    {
        // do with  loop
    }

    // o is the input activity object
    update(id, o)
    {
        // params = [{"id": id}, {"memberid": o.memberid},{"courseid": o.courseid}, {"begintime": o.begintime}, {"endtime": time}]
        return this._nio.updateobject("/admin/activity/", id, o, callback)
    }

    // You should call this like:
    //      import avc from '@service/appservice.js'
    //      courselist = avc.activities().get_course_list(avc.courses());
    //
    // In most cases, you should be able to access the "avc" variable, so simpley 
    // call avc.courses().find(null) to get a course list.
    //
    get_course_list(course)
    {
        return course.find(null)
    }

    get_member_list(members)
    {
        return members.find(null)
    }
}