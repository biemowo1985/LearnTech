/*jshint esversion: 6 */
import Datastore from 'nedb';
import path from 'path';
import { remote } from 'electron';

export default new Datastore({
    autoload: true,
    filename: path.join(remote.app.getPath('userData'), '/app_data.db')
});